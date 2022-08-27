import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function CreditCardSvg(props: SvgProps) {
  return (
    <Svg width={50} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
      <G fillRule="nonzero" fill="none">
        <Path
          d="M5.208.031h39.584C47.668.031 50 2.261 50 5.013v21.92c0 2.752-2.332 4.983-5.208 4.983H5.208C2.332 31.916 0 29.686 0 26.934V5.014C0 2.261 2.332.03 5.208.03z"
          fill="#2196F3"
        />
        <Path fill="#455A64" d="M0 6.009h50v7.971H0z" />
        <G fill="#FAFAFA">
          <Path d="M15.625 21.952H7.292c-.576 0-1.042-.446-1.042-.997 0-.55.466-.996 1.042-.996h8.333c.575 0 1.042.446 1.042.996s-.467.997-1.042.997zM21.875 25.937H7.292c-.576 0-1.042-.446-1.042-.996s.466-.997 1.042-.997h14.583c.575 0 1.042.447 1.042.997s-.467.996-1.042.996z" />
        </G>
      </G>
    </Svg>
  );
}

export default CreditCardSvg;
