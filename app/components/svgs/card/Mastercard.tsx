import * as React from 'react';
import Svg, { G, Ellipse, Path } from 'react-native-svg';

function Mastercard(props) {
  return (
    <Svg width="50px" height="30px" viewBox="0 0 50 30" {...props}>
      <G
        transform="translate(-30 -223) translate(10 198) translate(20 25)"
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
        fill="none">
        <Ellipse
          fill="#EE0005"
          cx={15.5555556}
          cy={15}
          rx={15.5555556}
          ry={15}
        />
        <Ellipse
          fill="#F9A000"
          cx={34.4444444}
          cy={15}
          rx={15.5555556}
          ry={15}
        />
        <Path
          d="M18.889 15c0 4.776 2.388 9.03 6.111 11.786 3.723-2.755 6.111-7.01 6.111-11.786S28.723 5.97 25 3.214C21.277 5.97 18.889 10.224 18.889 15z"
          fill="#FF6300"
        />
      </G>
    </Svg>
  );
}

export default Mastercard;
