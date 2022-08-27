import { TextStyle } from 'react-native';

type FontSize = 'x12' | 'x14' | 'x16' | 'x18' | 'x20' | 'x26' | 'x28' | 'x32';
export const fontSize: Record<FontSize, TextStyle> = {
  x12: {
    fontSize: 12,
  },
  x14: {
    fontSize: 14,
  },
  x16: {
    fontSize: 16,
  },
  x18: {
    fontSize: 18,
  },
  x20: {
    fontSize: 20,
  },
  x26: {
    fontSize: 26,
  },
  x28: {
    fontSize: 28,
  },
  x32: {
    fontSize: 32,
  },
};

type FontWeight =
  | 'Light'
  | 'LightOblique'
  | 'Book'
  | 'BookOblique'
  | 'Medium'
  | 'MediumOblique'
  | 'Demi'
  | 'DemiOblique'
  | 'Bold'
  | 'BoldOblique'
  | 'ExtraBold'
  | 'ExtraBoldOblique'
  | 'DCDBook'
  | 'DCDLight'
  | 'SCBook'
  | 'SCDemi'
  | 'SCLight'
  | 'SCMedium';
export const fontFamily: Record<FontWeight, TextStyle> = {
  Bold: {
    fontFamily: 'Futura-Bol',
  },
  BoldOblique: {
    fontFamily: 'Futura-BolObl',
  },
  Book: {
    fontFamily: 'Futura-Boo',
  },
  BookOblique: {
    fontFamily: 'Futura-BooObl',
  },
  DCDBook: {
    fontFamily: 'FuturaDCD-Boo',
  },
  DCDLight: {
    fontFamily: 'FuturaDCD-Lig',
  },
  Demi: {
    fontFamily: 'Futura-Dem',
  },
  DemiOblique: {
    fontFamily: 'Futura-DemObl',
  },
  ExtraBold: {
    fontFamily: 'Futura-ExtBol',
  },
  ExtraBoldOblique: {
    fontFamily: 'Futura-ExtBolObl',
  },
  Light: {
    fontFamily: 'Futura-Lig',
  },
  LightOblique: {
    fontFamily: 'Futura-LigObl',
  },
  Medium: {
    fontFamily: 'Futura-Med',
  },
  MediumOblique: {
    fontFamily: 'Futura-MedObl',
  },
  SCBook: {
    fontFamily: 'FuturaSC-Boo',
  },
  SCDemi: {
    fontFamily: 'FuturaSC-Dem',
  },
  SCLight: {
    fontFamily: 'FuturaSC-Lig',
  },
  SCMedium: {
    fontFamily: 'FuturaSC-Med',
  },
};
