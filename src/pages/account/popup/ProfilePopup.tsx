import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, updateProfile } from 'firebase/auth';
import { uploadImage } from 'firebases/storage';
import styled from 'styled-components';

import AccountForm from './AccountForm';
import Layout from './Layout';

const ImageInput = styled.input`
  border: 1px solid rgb(79, 79, 79);
  border-radius: 3px;
  font-size: 20px;
`;

function ProfilePopup() {
  const ImageRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const auth = getAuth();

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = ImageRef.current!.files![0];
    uploadImage(file).then((url) => {
      updateProfile(auth.currentUser!, { photoURL: url }).then(() => {
        navigate('/account');
        window.location.reload();
      });
    });
  };

  return (
    <Layout>
      <AccountForm onSubmit={onSubmitForm} buttonText='확인'>
        <ImageInput type='file' ref={ImageRef} />
      </AccountForm>
    </Layout>
  );
}

export default ProfilePopup;
