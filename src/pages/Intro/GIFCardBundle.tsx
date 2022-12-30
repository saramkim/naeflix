import GIFCard from 'components/GIFCard';
import styled from 'styled-components';

import deviceImg from '../../assets/device-pile.png';
import kidsImg from '../../assets/kids.png';
import mobileImg from '../../assets/mobile-0819.jpg';
import tvImg from '../../assets/tv.png';

const GIFCardBundleLayout = styled.div`
  margin-top: 50px;
`;

function GIFCardBundle() {
  return (
    <GIFCardBundleLayout>
      <GIFCard
        title='TV를 즐기세요.'
        content='스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 이용하실 수 없어요.'
        gif={tvImg}
      />
      <GIFCard
        title='가능한 디바이스에서 이용하세요.'
        content='데스크탑, 스마트폰, 태블릿, 노트북에서 이용하세요. 스트리밍은 돈 내고 하시고요.'
        gif={deviceImg}
        direction='reverse'
      />
      <GIFCard
        title='어린이 전용 프로필을 만들어 보세요.'
        content='자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 믈론 내플릭스에서는 안 됩니다.'
        gif={kidsImg}
      />
      <GIFCard
        title='즐겨 보는 콘텐츠를 저장하세요.'
        content='당연히 시청은 안 됩니다. 그냥 기록하자고요.'
        gif={mobileImg}
        direction='reverse'
      />
    </GIFCardBundleLayout>
  );
}

export default GIFCardBundle;
