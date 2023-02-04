import { useState } from 'react';

import nomalButton from 'assets/btn_google_signin_dark_normal.png';
import focusButton from 'assets/btn_google_signin_dark_pressed.png';
import styled from 'styled-components';

const GoogleLayout = styled.img`
  cursor: pointer;
  width: 220px;
`;

function GoogleButton({ onClick }: { onClick: React.MouseEventHandler<HTMLImageElement> }) {
  const [src, setSrc] = useState(nomalButton);

  return (
    <GoogleLayout
      src={src}
      onMouseEnter={() => setSrc(focusButton)}
      onMouseLeave={() => setSrc(nomalButton)}
      onClick={onClick}
    />
  );
}

export default GoogleButton;
