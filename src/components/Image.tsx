import noImage from 'assets/no-image.jpg';
import styled from 'styled-components';
import { DATA } from 'utils/constants';

type ImageType = { width: 154 | 342; path: string | null };

const Image154 = styled.img`
  width: 154px;
  height: 231px;
  border-radius: 5px;

  @media screen and (max-width: 550px) {
    width: 100px;
    height: 150px;
  }
`;

const Image342 = styled.img`
  width: 342px;
  border-radius: 10px;

  @media screen and (max-width: 550px) {
    width: 280px;
  }
`;

function Image({ width, path }: ImageType) {
  const IMAGE_SRC = path ? DATA.IMG_BASE_URL(width) + path : noImage;

  if (width === 154) return <Image154 src={IMAGE_SRC} alt='image-154' />;
  return <Image342 src={IMAGE_SRC} alt='image-342' />;
}

export default Image;
