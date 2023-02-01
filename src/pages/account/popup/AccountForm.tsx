import Button from 'components/Button';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

type AccountFormType = {
  children?: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  buttonText: string;
  title?: string;
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  gap: 30px;

  @media screen and (max-width: 550px) {
    gap: 20px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 36px;

  @media screen and (max-width: 550px) {
    /* font-size: 25px;
    line-height: 30px; */
  }
`;

function AccountForm({ children, onSubmit, buttonText, title }: AccountFormType) {
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });

  return (
    <Form onSubmit={onSubmit}>
      {title && <Title>{title}</Title>}
      {children}
      <Button fontSize={isMobile ? 20 : 25} padding={isMobile ? '12px' : undefined}>
        {buttonText}
      </Button>
    </Form>
  );
}

export default AccountForm;
