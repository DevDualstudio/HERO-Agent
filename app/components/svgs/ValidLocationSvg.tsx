import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function SvgIconLocationValidated(props: SvgProps) {
  return (
    <Svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path
          d="M19.601.037l-9.255 2.401L0 0v27.386l10.362 2.574.285-.072 4.762-1.205-2.004-1.908-1.875.475V4.55l6.907-1.792v19.11l1.518 1.446.823-.914V2.741l6.848 1.68v10.373l2.341-2.6V2.611L19.601.037zm-17.26 2.92L9.19 4.57v22.685l-6.848-1.7v-22.6z"
          fill="#000"
          fillRule="nonzero"
        />
        <Path
          fill="#93DF87"
          d="M28.218 17.59l1.742 1.564L20.218 30l-6.334-6.03 1.614-1.695 4.589 4.368z"
        />
      </G>
    </Svg>
  );
}

export default SvgIconLocationValidated;
