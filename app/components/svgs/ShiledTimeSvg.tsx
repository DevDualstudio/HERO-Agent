import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function ShieldTimeSvg(props: SvgProps) {
  return (
    <Svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h50v50H0z" />
        <Path
          d="M24.51 1.96l17.007 3.825a2.089 2.089 0 011.62 2.045v20.917c0 4.202-2.075 8.125-5.53 10.456L24.51 48.039l-13.097-8.836c-3.454-2.33-5.53-6.253-5.53-10.454V7.83c0-.981.673-1.83 1.62-2.044L24.51 1.961zM24.5 13.5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 2a8 8 0 110 16 8 8 0 010-16zm1 3h-2v7h6v-2h-4v-5z"
          fill="#000"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export default ShieldTimeSvg;
