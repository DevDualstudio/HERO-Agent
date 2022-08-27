import * as React from 'react';
import { View } from 'react-native';
import Svg, { SvgProps, Defs, ClipPath, Path, G } from 'react-native-svg';

function LogoSvg({ dark = false, ...props }) {
  const fill = dark ? '#000' : '#fff';

  return (
    <View
      style={{
        width: '100%',
        aspectRatio: 2.3726,
      }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 512 215.789"
        {...props}>
        <Defs>
          <ClipPath clipPathUnits="userSpaceOnUse" id="prefix__a">
            <Path d="M0 512h512V0H0z" />
          </ClipPath>
        </Defs>
        <Path
          d="M121.716 215.79V112.01H26.035v62.93H0V40.85h26.035V87.68h95.681V0h26.033v215.79zM172.276 174.94V40.85h78.721v23.106h-53.662v87.878h53.662v23.106z"
          fill={fill}
        />
        <G
          clipPath="url(#prefix__a)"
          transform="matrix(1.33333 0 0 -1.33333 -85.333 449.228)">
          <Path
            d="M318.402 205.715l-27.809 40.246h-2.055v-40.246h-18.794v100.569h23.482c12.15 0 19.07-1.554 25.53-5.733 7.778-5.251 12.408-14.48 12.408-24.702 0-13.463-7.624-23.924-20.055-27.79l30.086-42.344zm-23.346 57.03c11.61 0 17.495 4.469 17.495 13.287 0 8.936-5.452 12.922-17.676 12.922h-6.337v-26.21zM393.966 203.155c-29.291 0-53.12 23.993-53.12 53.486 0 28.297 24.577 52.204 53.669 52.204 29.492 0 53.485-23.747 53.485-52.937 0-29.088-24.24-52.753-54.034-52.753m.549 88.36c-19.128 0-34.692-15.727-34.692-35.058 0-20.17 15.079-35.97 34.327-35.97 19.332 0 35.056 15.89 35.056 35.421 0 19.967-15.24 35.606-34.691 35.606M241.521 257.59a9.396 9.396 0 00-9.396-9.396 9.396 9.396 0 100 18.792 9.396 9.396 0 009.396-9.396"
            fill={fill}
          />
        </G>
      </Svg>
    </View>
  );
}

export default LogoSvg;
