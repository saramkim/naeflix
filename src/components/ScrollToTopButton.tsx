import { memo } from 'react';

import { AiFillCaretUp } from 'react-icons/ai';
import styled from 'styled-components';

const ScrollTopButton = styled.button`
  background-color: rgb(222, 222, 222);
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  font-size: 30px;
`;

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollTopButton onClick={scrollToTop}>
      <AiFillCaretUp />
    </ScrollTopButton>
  );
}
export default memo(ScrollToTopButton);
