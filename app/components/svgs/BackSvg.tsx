import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function BackSvg(props: SvgProps) {
  return (
    <Svg width={27} height={13} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M7.5 1.95V.65a.651.651 0 00-.371-.593.602.602 0 00-.673.11l-6.25 5.85a.665.665 0 000 .966l6.25 5.85a.612.612 0 00.673.11.65.65 0 00.371-.593v-1.3a.663.663 0 00-.214-.49L4.253 7.8h22.122c.345 0 .625-.29.625-.65v-1.3c0-.359-.28-.65-.625-.65H4.253l3.033-2.76a.664.664 0 00.214-.49z"
        fill="#000"
        fillRule="nonzero"
      />
    </Svg>
  );
}

export default BackSvg;
