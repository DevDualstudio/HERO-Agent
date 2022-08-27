import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function ShieldPowerBlackSvg(props: SvgProps) {
  return (
    <Svg width={22} height={22} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h22v22H0z" />
        <Path
          d="M3.468 2.59L11 .917l7.532 1.673c.42.094.718.466.718.895v9.155a5.5 5.5 0 01-2.45 4.576L11 21.083l-5.8-3.867a5.5 5.5 0 01-2.45-4.575V3.485c0-.43.298-.801.718-.894zm8.449 6.577V4.583L7.333 11h2.75v4.583l4.584-6.416h-2.75z"
          fill="#000"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export default ShieldPowerBlackSvg;
