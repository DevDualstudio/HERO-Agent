import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function Default(props) {
  return (
    <Svg width="50px" height="32px" viewBox="0 0 50 32" {...props}>
      <G
        transform="translate(-50 -386) translate(30 366) translate(20 20)"
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
        fill="none">
        <Path
          d="M5.208.031h39.584C47.668.031 50 2.261 50 5.013v21.92c0 2.752-2.332 4.983-5.208 4.983H5.208C2.332 31.916 0 29.686 0 26.934V5.014C0 2.261 2.332.03 5.208.03z"
          fill="#4519F7"
        />
        <Path fill="#000" d="M0 6.0094454H50V13.980533399999999H0z" />
        <G fill="#FAFAFA">
          <Path
            d="M9.375 2.055H1.042C.466 2.055 0 1.61 0 1.06S.466.062 1.042.062h8.333c.575 0 1.042.446 1.042.997 0 .55-.467.996-1.042.996zM15.625 6.04H1.042C.466 6.04 0 5.596 0 5.045c0-.55.466-.996 1.042-.996h14.583c.575 0 1.042.446 1.042.996s-.467.997-1.042.997z"
            transform="translate(6.25 19.897)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default Default;
