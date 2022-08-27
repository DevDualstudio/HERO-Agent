import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function FolderSvg(props: SvgProps) {
  return (
    <Svg width={58} height={49} xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M50.854 8.923H32.496a2.775 2.775 0 01-1.975-.825l-5.728-6.023C23.416.705 21.533-.011 19.625 0H7.146C3.206 0 0 3.2 0 7.134v34.732C0 45.799 3.206 49 7.146 49h43.74c3.939-.017 7.131-3.233 7.114-7.156V16.057c0-3.934-3.206-7.134-7.146-7.134zm2.775 32.93a2.775 2.775 0 01-2.753 2.784H7.146a2.777 2.777 0 01-2.775-2.77V7.133a2.78 2.78 0 012.775-2.773h12.608c.73 0 1.438.29 1.914.762l5.697 5.995a7.186 7.186 0 005.131 2.168h18.358a2.777 2.777 0 012.775 2.77v25.797z"
        fill="#000"
        fillRule="nonzero"
      />
    </Svg>
  );
}

export default FolderSvg;
