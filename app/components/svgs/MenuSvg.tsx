import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgMenu(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6.615 1.852"
      height={7}
      width={25}
      {...props}>
      <Path d="M0 0h6.615v.265H0zM0 1.852h4.233v-.265H0z" />
    </Svg>
  );
}

export default SvgMenu;
