import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

function BgCircleSvg({ style = {}, ...props }) {
  return (
    <View style={style}>
      <Svg
        width={249}
        height={249}
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Path
          d="M124.5 0C193.257 0 249 55.743 249 124.5S193.257 249 124.5 249 0 193.257 0 124.5 55.743 0 124.5 0zm36.285 36.901c-35.43-14.676-76.213-6.563-103.33 20.554-27.117 27.117-35.23 67.9-20.554 103.33 14.676 35.43 49.25 58.531 87.599 58.531 52.366 0 94.816-42.45 94.816-94.816 0-38.35-23.101-72.923-58.531-87.599z"
          fill="#000"
          fillRule="evenodd"
        />
      </Svg>
    </View>
  );
}

export default BgCircleSvg;
