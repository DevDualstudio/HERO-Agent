import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function FAQ(props) {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 24 24" {...props}>
      <G
        transform="translate(-32 -545) translate(32 545)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <Path d="M0 0L24 0 24 24 0 24z" />
        <Path
          d="M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM11 14h2v2h-2v-2zM8.567 8.813A3.501 3.501 0 1112 13h-1v-2h1a1.5 1.5 0 10-1.471-1.794l-1.962-.393z"
          fill="#000"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export default FAQ;
