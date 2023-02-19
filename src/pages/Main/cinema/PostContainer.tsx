import styled from 'styled-components';

const PostContainerLayout = styled.div`
  max-width: 1080px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  gap: 20px;
`;

function PostContainer({ children }: { children: React.ReactNode }) {
  return <PostContainerLayout>{children}</PostContainerLayout>;
}

export default PostContainer;
