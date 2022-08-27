import * as React from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';

function Visa(props) {
  return (
    <Svg width="45px" height="29px" viewBox="0 0 45 29" {...props}>
      <G
        transform="translate(-33 -129) translate(10 103) translate(23 26)"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd">
        <Rect fill="#293688" x={0} y={0} width={45} height={29} rx={4} />
        <G transform="translate(4.444 8.667)">
          <Path
            d="M.037.09H4.47C5.068.111 5.55.3 5.716.936l.964 4.61C5.733 3.137 3.45 1.13 0 .299L.037.09z"
            fill="#FFF"
          />
          <Path
            d="M5.401 10.606l-2.56-8.7C4.68 3.077 6.248 4.936 6.8 6.23l.3 1.075L9.9.189h3.03L8.428 10.604l-3.027.002z"
            fill="#FFF"
          />
          <Path
            fill="#FFF"
            d="M15.1577141 10.6132032L12.2982676 10.6132032 14.0861571 0.178446912 16.9470745 0.178446912z"
          />
          <Path
            d="M20.134 10.77c-1.282-.013-2.517-.266-3.186-.558l.402-2.335.369.166c.939.39 1.547.548 2.692.548.822 0 1.702-.32 1.71-1.019.005-.457-.368-.783-1.482-1.295-1.085-.499-2.523-1.335-2.505-2.834C18.15 1.415 20.141 0 22.968 0c1.107 0 1.995.227 2.561.438L25.143 2.7l-.258-.12a5.302 5.302 0 00-2.14-.4c-1.12 0-1.639.464-1.639.897-.006.489.606.81 1.606 1.295 1.65.744 2.413 1.648 2.402 2.835-.022 2.164-1.973 3.563-4.98 3.563zM32.526 10.618s-.26-1.2-.348-1.564l-3.662-.004c-.111.281-.601 1.568-.601 1.568h-3.003l4.246-9.563c.301-.68.813-.866 1.498-.866h2.21l2.314 10.428h-2.654z"
            fill="#FFF"
          />
          <Path
            d="M31.125 3.926l-.225-.85c-.17.371-.462.967-.443.94 0 0-1.054 2.186-1.329 2.753h2.77l-.773-2.843z"
            fill="#293688"
            fillRule="nonzero"
          />
        </G>
      </G>
    </Svg>
  );
}

export default Visa;
