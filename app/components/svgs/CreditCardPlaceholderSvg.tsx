import * as React from 'react';
import Svg, { SvgProps, G, Rect } from 'react-native-svg';

function CreditCardPlaceholderSvg(props: SvgProps) {
  return (
    <Svg width={304} height={190} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd">
        <Rect
          stroke="#000"
          strokeWidth={2}
          x={1}
          y={1}
          width={302}
          height={188}
          rx={15}
        />
        <Rect
          stroke="#000"
          opacity={0.296}
          x={13.5}
          y={13.5}
          width={277}
          height={163}
          rx={12}
        />
        <Rect fill="#000" x={28} y={28} width={50} height={50} rx={8} />
      </G>
    </Svg>
  );
}

export default CreditCardPlaceholderSvg;
