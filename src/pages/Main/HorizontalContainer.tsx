import { useRef, useState } from 'react';

import TextButton from 'components/TextButton';
import styled from 'styled-components';
import { MOVIE, STYLE } from 'utils/constants';
import { throttle } from 'utils/throttle';

type HorizontalContainerType = {
  children: React.ReactNode[];
  category: string;
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

  @media screen and (max-width: 550px) {
    padding-right: 30px;
  }
`;

const Title = styled.h1`
  font-size: 20px;

  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

const ChildrenCount = styled.span`
  margin-left: 5px;
  color: rgb(155, 155, 155);

  font-size: 18px;

  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`;

const Wrapper = styled.div`
  display: flexbox;
  overflow: scroll;
  max-width: fit-content;
  gap: 10px;

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

  @media screen and (max-width: 550px) {
    gap: 5px;
  }
`;

function HorizontalContainer({ children, category }: HorizontalContainerType) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState(false);
  const [mouseDownX, setMouseDownX] = useState(0);

  const onDragStart = (currentX: number) => {
    setCanScroll(true);
    if (scrollRef.current) setMouseDownX(currentX + scrollRef.current.scrollLeft);
  };
  const onDragStartByMouse = (e: React.MouseEvent<HTMLDivElement>) => onDragStart(e.pageX);
  const onDragStartByTouch = (e: React.TouchEvent<HTMLDivElement>) =>
    onDragStart(e.changedTouches[0].pageX);

  const onDragEnd = () => setCanScroll(false);

  const onDrag = (currentX: number) => {
    if (canScroll && scrollRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = mouseDownX - currentX;

      if (scrollLeft === 0) setMouseDownX(currentX);
      else if (scrollWidth <= clientWidth + scrollLeft) setMouseDownX(currentX + scrollLeft);
    }
  };
  const onDragByMouse = (e: React.MouseEvent<HTMLDivElement>) => onDrag(e.pageX);
  const onDragByTouch = (e: React.TouchEvent<HTMLDivElement>) => onDrag(e.changedTouches[0].pageX);

  return (
    <Layout>
      <Info>
        <Title>
          <span>{MOVIE.CATEGORY_NAME[category]}</span>
          <ChildrenCount>({children.length})</ChildrenCount>
        </Title>
        {Boolean(children.length) && (
          <TextButton hover='opacity' color={STYLE.MAIN_COLOR} path={category}>
            모두 보기
          </TextButton>
        )}
      </Info>
      <Wrapper
        ref={scrollRef}
        onMouseDown={onDragStartByMouse}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onMouseMove={throttle(onDragByMouse, 30)}
        onTouchStart={onDragStartByTouch}
        onTouchEnd={onDragEnd}
        onTouchMove={onDragByTouch}
      >
        {children}
      </Wrapper>
    </Layout>
  );
}

export default HorizontalContainer;
