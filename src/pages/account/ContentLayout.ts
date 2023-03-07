import styled from 'styled-components';

const ContentLayout = styled.div`
  ${({ theme }) => theme.flex.spaceBetween}
  padding: 10px 0;
`;

export default ContentLayout;
