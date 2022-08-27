import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgIconMapCurrentLocation(props: SvgProps) {
  return (
    <Svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M11.983 7.626a4.356 4.356 0 00-4.357 4.357 4.356 4.356 0 004.357 4.357 4.356 4.356 0 004.357-4.357 4.356 4.356 0 00-4.357-4.357zm9.739 3.268a9.798 9.798 0 00-8.65-8.65V0h-2.178v2.244a9.798 9.798 0 00-8.65 8.65H0v2.178h2.244a9.798 9.798 0 008.65 8.65v2.244h2.178v-2.244a9.798 9.798 0 008.65-8.65h2.244v-2.178h-2.244zm-9.739 8.715a7.627 7.627 0 01-7.626-7.626 7.627 7.627 0 017.626-7.626 7.627 7.627 0 017.626 7.626 7.627 7.627 0 01-7.626 7.626z"
        fill="#000"
        fillRule="nonzero"
      />
    </Svg>
  );
}

export default SvgIconMapCurrentLocation;
