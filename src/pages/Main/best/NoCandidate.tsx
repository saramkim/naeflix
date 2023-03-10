import TextButton from 'components/TextButton';
import styled from 'styled-components';

const NoCandidateLayout = styled.div`
  ${({ theme }) => theme.flex.columnCenter};
  ${({ theme }) => theme.font(22)};
  height: 100%;
  padding: 30px;
  text-align: center;
  gap: 20px;

  & > p:nth-child(3) {
    ${({ theme }) => theme.font(18)};
    color: rgb(125, 125, 125);
  }
`;

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.flex.center};
  ${({ theme }) => theme.font(20)};
  color: ${({ theme }) => theme.color.main};
  gap: 30px;
  margin-top: 30px;

  @media screen and (max-width: 550px) {
    ${({ theme }) => theme.flex.columnCenter};
  }
`;

function NoCandidate() {
  return (
    <NoCandidateLayout>
      <p>평점 10점의 영화가 존재하지 않습니다.</p>
      <p>평점 10점의 영화만 인생 영화로 등록 가능합니다.</p>
      <p>*이미 등록한 인생 영화를 중복 등록할 수 없습니다.</p>
      <ButtonWrapper>
        <TextButton path='/main/top-rated'>높은 평점의 영화</TextButton>
        <TextButton path='/main/trending-day'>오늘의 인기 영화</TextButton>
        <TextButton path='/main/search'>영화 검색</TextButton>
      </ButtonWrapper>
    </NoCandidateLayout>
  );
}

export default NoCandidate;
