import Button from 'components/Button';
import styled from 'styled-components';

type PopupFormType = {
  children?: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  buttonText: string;
  title?: string;
};

const Form = styled.form`
  ${({ theme }) => theme.flex.column};
  width: 100%;

  gap: 30px;

  @media screen and (max-width: 550px) {
    gap: 20px;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.font(36)}
`;

function PopupForm({ children, onSubmit, buttonText, title }: PopupFormType) {
  return (
    <Form onSubmit={onSubmit}>
      {title && <Title>{title}</Title>}
      {children}
      <Button fontSize={20} padding={16}>
        {buttonText}
      </Button>
    </Form>
  );
}

export default PopupForm;
