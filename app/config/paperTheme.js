import color from 'color';
import { Colors } from '../styles';

const paperTheme = {
  colors: {
    primary: Colors.secondary,
    accent: Colors.heroic,
    background: 'transparent',
    surface: '#fff',
    error: '#B00020',
    text: '#000',
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: color('#000').alpha(0.26).rgb().string(),
    placeholder: color('#000').alpha(0.54).rgb().string(),
    backdrop: color('#000').alpha(0.5).rgb().string(),
    notification: Colors.heroic,
  },
  fonts: {
    light: { fontFamily: 'Futura-Lig' },
    medium: { fontFamily: 'Futura-Med' },
    regular: { fontFamily: 'Futura-Dem' },
    thin: { fontFamily: 'Futura-Lig' },
  },
};
export default paperTheme;
