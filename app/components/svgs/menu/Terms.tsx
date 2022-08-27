import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function Terms(props) {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 24 24" {...props}>
      <G
        transform="translate(-32 -621) translate(32 621)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <Path d="M0 0L24 0 24 24 0 24z" />
        <Path
          d="M21 8v12.993A1 1 0 0120.007 22H3.993A.993.993 0 013 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"
          fill="#000"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export default Terms;
