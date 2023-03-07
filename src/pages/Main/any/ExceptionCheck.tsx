import Checkbox from 'components/Checkbox';
import styled from 'styled-components';

type ExceptionCheckType = {
  isExcept: boolean;
  setExcept: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExceptionCheckLayout = styled.div`
  ${({ theme }) => theme.font(20)};
  position: absolute;
  top: 100px;
  right: 30px;

  @media screen and (max-width: 550px) {
    top: 80px;
    right: 24px;
  }
`;

function ExceptionCheck({ isExcept, setExcept }: ExceptionCheckType) {
  const onChange = () => {
    setExcept((isExcept) => !isExcept);
  };

  return (
    <ExceptionCheckLayout>
      <Checkbox checked={isExcept} onChange={onChange}>
        시청한 영화 제외
      </Checkbox>
    </ExceptionCheckLayout>
  );
}

export default ExceptionCheck;
