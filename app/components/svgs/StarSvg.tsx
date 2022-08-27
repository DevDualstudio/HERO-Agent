import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function StarSvg(props: SvgProps) {
  return (
    <Svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h16v16H0z" />
        <Path
          d="M8 12.173l-4.702 2.632 1.05-5.285L.391 5.861l5.352-.634L8 .333l2.257 4.894 5.352.634-3.957 3.659 1.05 5.285L8 12.173zm0-1.528l2.831 1.585-.632-3.182 2.382-2.203-3.222-.382L8 3.517 6.641 6.463l-3.222.382 2.382 2.203-.632 3.182L8 10.645z"
          fill="#000"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}

export default StarSvg;
