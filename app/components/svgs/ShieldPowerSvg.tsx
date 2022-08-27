import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function ShieldPowerSvg(props: SvgProps) {
  return (
    <Svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h50v50H0z" />
        <Path
          fill="#4519F7"
          d="M26.875 20.217V8.134L15 25.05h7.125v12.084L34 20.217z"
        />
        <Path
          d="M7.503 5.785L24.51 1.961l17.007 3.824a2.089 2.089 0 011.62 2.045v20.917c0 4.202-2.075 8.125-5.53 10.456L24.51 48.039l-13.097-8.836c-3.454-2.33-5.53-6.253-5.53-10.454V7.83c0-.981.673-1.83 1.62-2.044zM26.58 20.811V10.34L16.23 25h6.21v10.472l10.349-14.66h-6.21z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export default ShieldPowerSvg;
