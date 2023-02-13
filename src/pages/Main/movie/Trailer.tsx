import { useTrailer } from 'hooks/useTrailer';
import { BiLoaderCircle } from 'react-icons/bi';
import styled from 'styled-components';

type TrailerType = {
  id: string;
  setTrailer: React.Dispatch<React.SetStateAction<boolean>>;
};

const TrailerLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 30px 0;
`;

const TrailerButton = styled.button`
  font-size: 25px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: black;
  color: white;
`;

const Video = styled.iframe`
  max-width: 100%;
  width: 853px;
  height: 480px;

  @media screen and (max-width: 550px) {
    height: 300px;
  }
`;

const Text = styled.div`
  position: relative;
  font-size: 25px;
  margin: 150px 0;
`;

function Trailer({ id, setTrailer }: TrailerType) {
  const youtubeId = useTrailer({ id, setTrailer });

  if (youtubeId) {
    return (
      <TrailerLayout>
        <TrailerButton onClick={() => setTrailer(false)}>X</TrailerButton>
        <Video
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          allowFullScreen
          allow='autoplay'
        />
      </TrailerLayout>
    );
  }

  return <Text>{youtubeId === undefined ? <BiLoaderCircle /> : '예고편을 찾을 수 없습니다.'}</Text>;
}

export default Trailer;
