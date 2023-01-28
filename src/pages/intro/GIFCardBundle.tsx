import deviceImg from 'assets/device-pile.png';
import kidsImg from 'assets/kids.png';
import mobileImg from 'assets/mobile-0819.jpg';
import tvImg from 'assets/tv.png';
import styled from 'styled-components';

import GIFCard from './GIFCard';

const GIFCardBundleLayout = styled.div`
  margin-top: 50px;
`;

function GIFCardBundle() {
  return (
    <GIFCardBundleLayout>
      <GIFCard
        title='스트리밍 사이트 아닙니다.'
        content='불법 스트리밍 사이트를 이용하지 맙시다.'
        gif={tvImg}
      />
      <GIFCard
        title='다양한 디바이스에서 이용하세요.'
        content='데스크탑, 스마트폰, 태블릿, 노트북에서 모두 이용 가능합니다.'
        gif={deviceImg}
        direction='reverse'
      />
      <GIFCard title='어린이 전용 프로필' content='그런 기능 없습니다.' gif={kidsImg} />
      <GIFCard
        title='시청한 영화에 대해 기록하세요.'
        content='평점도 주고 한줄평도 남겨봅시다.'
        gif={mobileImg}
        direction='reverse'
      />
    </GIFCardBundleLayout>
  );
}

export default GIFCardBundle;
