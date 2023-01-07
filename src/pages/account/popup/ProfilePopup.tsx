import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import { getAuth, updateProfile } from 'firebase/auth';
import styled from 'styled-components';

import { uploadImage } from '../../../firebase/useStorage';

import Layout from './Layout';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 100%;
`;

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
      <Form onSubmit={onSubmitForm}>
        <ImageInput type='file' ref={ImageRef} />
        <Button fontSize={25}>확인</Button>
      </Form>
    </Layout>
  );
}

export default ProfilePopup;
