import { TextStyle } from 'react-native';
import Colors from './colors';
import { Typography } from './index';

const h1: TextStyle = {
  ...Typography.fontSize.x28,
  fontWeight: '700',
};
const h2: TextStyle = {
  ...Typography.fontSize.x28,
  ...Typography.fontFamily.Demi,
};

const h3: TextStyle = {
  ...Typography.fontSize.x20,
  ...Typography.fontFamily.Medium,
};

const p: TextStyle = {
  ...Typography.fontFamily.Book,
  ...Typography.fontSize.x20,
  lineHeight: 28,
  textAlign: 'center',
  color: Colors.lightHeroic,
};

const psmall: TextStyle = {
  ...Typography.fontFamily.Book,
  ...Typography.fontSize.x18,
  lineHeight: 22,
  color: Colors.lightHeroic,
};

export default { h1, h2, h3, p, psmall };
