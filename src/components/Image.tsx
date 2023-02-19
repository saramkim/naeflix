import noImage from 'assets/no-image.jpg';
import styled from 'styled-components';
import { DATA } from 'utils/constants';

type ImageType = { width: 154 | 342 | 185; path: string | null; id?: string };

const Image154 = styled.img`
  width: 154px;
  height: 231px;
  border-radius: 5px;

  @media screen and (max-width: 550px) {
    width: 100px;
    height: 150px;
  }
`;

const Image185 = styled.img`
  width: 185px;
  height: 277.5px;
  border-radius: 5px;
`;

const Image342 = styled.img`
  width: 342px;
  height: 513px;
  border-radius: 10px;

  @media screen and (max-width: 550px) {
    width: 280px;
    height: 420px;
  }
`;

function Image({ width, path, id }: ImageType) {
  const IMAGE_SRC = path ? DATA.IMG_BASE_URL(width) + path : noImage;

  if (width === 154) return <Image154 src={IMAGE_SRC} alt='image' id={id} />;
  if (width === 185) return <Image185 src={IMAGE_SRC} alt='image' id={id} />;
  return <Image342 src={IMAGE_SRC} alt='image' id={id} />;
}

export default Image;
