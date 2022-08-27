import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function History(props) {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 24 24" {...props}>
      <G
        transform="translate(-30 -170) translate(30 170)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <Path d="M0 0L24 0 24 24 0 24z" />
        <Path
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 101.385-4.5H8v2H2v-6h2V6a9.98 9.98 0 018-4zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"
          fill="#000"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export default History;
