import symbol from 'assets/Netflix_Symbol_RGB.png';
import styled from 'styled-components';

const LoadginLayout = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Symbol = styled.img`
  height: 500px;
`;

function Loading() {
  return (
    <LoadginLayout>
      <Symbol src={symbol} />
    </LoadginLayout>
  );
}

export default Loading;
