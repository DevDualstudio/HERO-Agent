import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function ShieldPartySvg(props: SvgProps) {
  return (
    <Svg width={50} height={50} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h50v50H0z" />
        <Path
          d="M24.51 1.96l17.007 3.825a2.089 2.089 0 011.62 2.045v20.917c0 4.202-2.075 8.125-5.53 10.456L24.51 48.039l-13.097-8.836c-3.454-2.33-5.53-6.253-5.53-10.454V7.83c0-.981.673-1.83 1.62-2.044L24.51 1.961zM16.55 30l-1.51 3.327-.027.075c-.095.37.347.706.801.565L19 32.98l-.285-.238A8.96 8.96 0 0116.55 30zm2.594-8L17 27.685l.1.365A10.243 10.243 0 0020.31 33L23 31.997l-.256-.234a11.678 11.678 0 01-3.6-9.763zm1.679-3c-1.793 4.289-.567 9.19 2.816 12L26 30.061l-.218-.246c-1.934-2.25-2.969-5.309-2.747-8.47zM25 23c.106 2.666 1.38 5.185 3.538 7l2.014-.688.096-.04c.39-.198.478-.693.15-.992zm8.854 2.146a.5.5 0 10-.708.708.5.5 0 00.708-.708zm1.69-3.98c-.132-.039-3.26-.923-6.348 1.821a.548.548 0 000 .84c.26.23.683.23.944 0 2.511-2.232 4.957-1.542 4.981-1.535.35.103.728-.065.845-.375.116-.311-.073-.647-.423-.75zm.277-7.987a.611.611 0 00-.864 0c-.482.482-.388 1.162-.297 1.648-.486-.091-1.166-.185-1.648.296-.481.482-.387 1.162-.296 1.648-.486-.09-1.166-.185-1.648.297s-.387 1.161-.297 1.648c-.486-.091-1.166-.185-1.647.296-.482.482-.388 1.162-.297 1.648-.486-.09-1.166-.185-1.648.297a.611.611 0 00.86.868c.316-.158 1.296.432 1.84-.112.54-.539-.033-1.499.11-1.835.337-.143 1.296.43 1.835-.11.539-.538-.034-1.498.11-1.835.337-.143 1.296.43 1.835-.109.538-.539-.034-1.499.109-1.835.335-.143 1.297.429 1.835-.11.544-.544-.045-1.525.112-1.84a.611.611 0 00-.004-.86zM34.5 19a.5.5 0 100 1 .5.5 0 000-1zm-6.666-4.609a.598.598 0 00-.75-.361.568.568 0 00-.376.723c.007.021.698 2.117-1.534 4.27a.558.558 0 000 .81.609.609 0 00.839 0c2.744-2.648 1.86-5.329 1.82-5.442zm2.02.755a.5.5 0 10-.708.708.5.5 0 00.708-.708zm-6 0a.5.5 0 10-.708.708.5.5 0 00.708-.708z"
          fill="#000"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export default ShieldPartySvg;
