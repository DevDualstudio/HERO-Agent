import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function Favourites(props) {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 24 24" {...props}>
      <G
        transform="translate(-30 -244) translate(30 244)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <Path d="M0 0L24 0 24 24 0 24z" />
        <Path
          d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"
          fill="#000"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export default Favourites;
