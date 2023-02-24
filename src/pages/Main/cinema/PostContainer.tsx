import { FlexColumn } from 'components/style/Flex';
import styled from 'styled-components';

const PostContainerLayout = styled(FlexColumn)`
  max-width: 1080px;
  width: 100%;
  border-radius: 5px;
  gap: 20px;
`;

function PostContainer({ children }: { children: React.ReactNode }) {
  return <PostContainerLayout>{children}</PostContainerLayout>;
}

export default PostContainer;
