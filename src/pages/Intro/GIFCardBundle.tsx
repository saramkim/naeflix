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
        title='TV로 즐기세요.'
        content='스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.'
        gif={tvImg}
      />
      <GIFCard
        title='다양한 디바이스에서 시청하세요.'
        content='각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.'
        gif={deviceImg}
        direction='reverse'
      />
      <GIFCard
        title='어린이 전용 프로필을 만들어 보세요.'
        content='자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.'
        gif={kidsImg}
      />
      <GIFCard
        title='즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.'
        content='광고형 베이식을 제외한 모든 멤버십에서 이용할 수 있습니다.'
        gif={mobileImg}
        direction='reverse'
      />
    </GIFCardBundleLayout>
  );
}

export default GIFCardBundle;
