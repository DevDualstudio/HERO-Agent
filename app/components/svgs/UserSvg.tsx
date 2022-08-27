import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function UserSvg(props: SvgProps & { color?: string }) {
  return (
    <Svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h20v20H0z" />
        <Path
          d="M3.333 18.333a6.667 6.667 0 0113.334 0H15a5 5 0 00-10 0H3.333zm6.667-7.5c-2.763 0-5-2.237-5-5 0-2.762 2.237-5 5-5 2.762 0 5 2.238 5 5 0 2.763-2.238 5-5 5zm0-1.666A3.332 3.332 0 1010 2.5a3.332 3.332 0 100 6.667z"
          fill={props.color || '#C3C5D3'}
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export default UserSvg;
