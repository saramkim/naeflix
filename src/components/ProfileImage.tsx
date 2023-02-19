import defaultProfile from 'assets/kakao-profile.jpg';
import styled from 'styled-components';

const ImageLayout = styled.img<{ size: number }>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
`;

function ProfileImage({ size, src }: { size: number; src?: string | null }) {
  return <ImageLayout size={size} src={src || defaultProfile} alt='profile-image' />;
}

export default ProfileImage;
