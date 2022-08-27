import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function LetterSvg(props: SvgProps & { color?: string }) {
  return (
    <Svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M0 0h20v20H0z" />
        <Path
          d="M2.5 2.5h15c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833h-15a.833.833 0 01-.833-.833V3.333c0-.46.373-.833.833-.833zm14.167 3.532l-6.607 5.916-6.727-5.935v9.82h13.334V6.032zM3.759 4.167l6.292 5.551 6.2-5.551H3.76z"
          fill={props.color || '#C3C5D3'}
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
}
export default LetterSvg;
