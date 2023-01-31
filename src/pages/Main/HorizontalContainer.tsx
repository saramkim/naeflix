import { useRef, useState } from 'react';

import TextButton from 'components/TextButton';
import styled from 'styled-components';
import { MOVIE, STYLE } from 'utils/constants';
import { throttle } from 'utils/throttle';

type HorizontalContainerType = {
  children: JSX.Element[];
  category: string;
  viewAll?: boolean;
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
`;

const Category = styled.h1`
  font-size: 20px;
`;

const MovieWrapper = styled.div`
  display: flexbox;
  gap: 10px;
  overflow: scroll;
  max-width: fit-content;

  &::-webkit-scrollbar {
    width: 0;
    height: 6px;
    border-radius: 3px;
    background: rgb(55, 55, 55);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(155, 155, 155);
    border-radius: 3px;
  }
`;

function HorizontalContainer({
  children,
  category,
  viewAll = Boolean(children.length),
}: HorizontalContainerType) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [mouseDownX, setMouseDownX] = useState(0);

  const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setCanScroll(true);
    setMouseDownX(e.pageX + scrollRef.current!.scrollLeft);
  };

  const onDragEnd = () => setCanScroll(false);

  const onDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (canScroll && scrollRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      scrollRef.current.scrollLeft = mouseDownX - e.pageX;

      if (scrollLeft === 0) setMouseDownX(e.pageX);
      else if (scrollWidth <= clientWidth + scrollLeft) setMouseDownX(e.pageX + scrollLeft);
    }
  };

  return (
    <Layout>
      <Info>
        <Category>{MOVIE.CATEGORY_NAME[category]}</Category>
        {viewAll && (
          <TextButton hover='opacity' color={STYLE.MAIN_COLOR} path={category}>
            모두 보기
          </TextButton>
        )}
      </Info>
      <MovieWrapper
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onMouseMove={throttle(onDrag, 50)}
      >
        {children}
      </MovieWrapper>
    </Layout>
  );
}

export default HorizontalContainer;
