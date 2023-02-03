import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import defaultProfile from 'assets/kakao-profile.jpg';
import TextButton from 'components/TextButton';
import { getAuth, updateProfile } from 'firebase/auth';
import { deleteImage, uploadImage } from 'firebases/storage';
import styled from 'styled-components';

import AccountForm from './AccountForm';
import Layout from './Layout';

const ImageInput = styled.input`
  border: 1px solid rgb(79, 79, 79);
  border-radius: 3px;
  font-size: 20px;
`;

const Image = styled.img`
  height: 180px;
  width: auto;
  max-width: 100%;
  margin: auto;
`;

function ProfilePopup() {
  const auth = getAuth();
  const ImageRef = useRef<HTMLInputElement>(null);
  const [currentUrl, setCurrentUrl] = useState<string | null | undefined>(
    auth.currentUser?.photoURL
  );
  const navigate = useNavigate();
  const reader = new FileReader();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ImageRef.current!.files!.length) {
      const file = ImageRef.current!.files![0];
      uploadImage(file).then((photoURL) =>
        updateProfile(auth.currentUser!, { photoURL }).then(() => {
          navigate('/account');
          window.location.reload();
        })
      );
    }
  };

  const onReset = () => {
    const userImage = auth.currentUser?.photoURL;
    if (userImage && window.confirm('프로필 사진을 초기화하시겠습니까?')) {
      deleteImage(userImage).then(() =>
        updateProfile(auth.currentUser!, { photoURL: '' }).then(() => {
          navigate('/account');
          window.location.reload();
        })
      );
    }
  };

  const onPreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (!file.type.match('image/.*')) alert('이미지 파일만 업로드 할 수 있습니다.');
      else reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    reader.onload = (e) => {
      if (typeof e.target?.result === 'string') setCurrentUrl(e.target.result);
    };
    return () => reader.abort();
  }, [currentUrl]);

  return (
    <Layout>
      <AccountForm onSubmit={onSubmitForm} buttonText='확인'>
        {currentUrl && <TextButton onClick={onReset}>초기화</TextButton>}
        <Image src={currentUrl || defaultProfile} />
        <ImageInput type='file' ref={ImageRef} onChange={onPreview} />
      </AccountForm>
    </Layout>
  );
}

export default ProfilePopup;
