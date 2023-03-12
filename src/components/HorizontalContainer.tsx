import { useRef, useState } from 'react';

import TextButton from 'components/TextButton';
import styled from 'styled-components';
import { DATA, STYLE } from 'utils/constants';
import { throttle } from 'utils/throttle';

type HorizontalContainerType = {
  children: React.ReactNode[];
  category: string;
};

const HorizontalContainerLayout = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 10px;
`;

const TextWrapper = styled.div`
  ${({ theme }) => theme.flex.spaceBetween}
  padding-right: 50px;

  @media screen and (max-width: 550px) {
    padding-right: 30px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: baseline;
  cursor: pointer;
  gap: 5px;
`;

const ChildrenCount = styled.span`
  ${({ theme }) => theme.font(17)}
  color: rgb(155, 155, 155);
`;

const Category = styled.div`
  ${({ theme }) => theme.font(20)}
`;

const Wrapper = styled.div`
  display: flex;
  overflow: scroll;
  max-width: fit-content;
  gap: 10px;

  &::-webkit-scrollbar {
    background: rgb(55, 55, 55);
    border-radius: 3px;
    width: 0;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(155, 155, 155);
    border-radius: 3px;
  }

  @media screen and (max-width: 550px) {
    gap: 5px;
  }
`;

function HorizontalContainer({ children, category }: HorizontalContainerType) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isShown, setShown] = useState(true);
  const [canScroll, setCanScroll] = useState(false);
  const [mouseDownX, setMouseDownX] = useState(0);
  const [needPreventClick, setNeedPreventClick] = useState(false);

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
      scrollRef.current.scrollLeft = mouseDownX - currentX;
      setNeedPreventClick(true);

      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
      if (scrollLeft === 0) setMouseDownX(currentX);
      else if (scrollWidth <= clientWidth + scrollLeft) setMouseDownX(currentX + scrollLeft);
    } else setNeedPreventClick(false);
  };
  const onDragByMouse = (e: React.MouseEvent<HTMLDivElement>) => onDrag(e.pageX);
  const onDragByTouch = (e: React.TouchEvent<HTMLDivElement>) => onDrag(e.changedTouches[0].pageX);

  const onPreventClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (needPreventClick) e.stopPropagation();
  };

  return (
    <HorizontalContainerLayout>
      <TextWrapper>
        <Info onClick={() => setShown((v) => !v)}>
          <Category>{DATA.CATEGORY_NAME[category]}</Category>
          <ChildrenCount>({children.length})</ChildrenCount>
        </Info>
        {Boolean(children.length) && (
          <TextButton hover='opacity' color={STYLE.MAIN_COLOR} path={category}>
            모두 보기
          </TextButton>
        )}
      </TextWrapper>
      <Wrapper
        ref={scrollRef}
        onMouseDown={onDragStartByMouse}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onMouseMove={throttle(onDragByMouse, 30)}
        onTouchStart={onDragStartByTouch}
        onTouchEnd={onDragEnd}
        onTouchMove={onDragByTouch}
        onClickCapture={onPreventClick}
      >
        {isShown && children}
      </Wrapper>
    </HorizontalContainerLayout>
  );
}

export default HorizontalContainer;
