import { StyleSheet, Dimensions, StatusBar } from 'react-native';

export default StyleSheet.create({
  m5: { margin: 5 },
  m10: { margin: 10 },
  m20: { margin: 20 },
  m40: { margin: 40 },

  mt2: { marginTop: 2 },
  mt5: { marginTop: 5 },
  mt10: { marginTop: 10 },
  mt15: { marginTop: 15 },
  mt20: { marginTop: 20 },
  mt30: { marginTop: 30 },
  mt40: { marginTop: 40 },
  mt60: { marginTop: 60 },

  mr5: { marginRight: 5 },
  mr10: { marginRight: 10 },
  mr15: { marginRight: 15 },
  mr20: { marginRight: 20 },

  ml5: { marginLeft: 5 },
  ml10: { marginLeft: 10 },
  ml15: { marginLeft: 15 },
  ml20: { marginLeft: 20 },
  ml30: { marginLeft: 30 },

  mb5: { marginBottom: 5 },
  mb10: { marginBottom: 10 },
  mb15: { marginBottom: 15 },
  mb20: { marginBottom: 20 },
  mb30: { marginBottom: 30 },
  mb60: { marginBottom: 60 },
  mb80: { marginBottom: 80 },

  p2: { padding: 2 },
  p5: { padding: 5 },
  p10: { padding: 10 },
  p20: { padding: 20 },
  p40: { padding: 40 },

  pb2: { paddingBottom: 2 },
  pb5: { paddingBottom: 5 },
  pb10: { paddingBottom: 10 },
  pb20: { paddingBottom: 20 },
  pb30: { paddingBottom: 30 },
  pb40: { paddingBottom: 40 },

  pt2: { paddingTop: 2 },
  pt5: { paddingTop: 5 },
  pt10: { paddingTop: 10 },
  pt20: { paddingTop: 20 },
  pt30: { paddingTop: 30 },
  pt40: { paddingTop: 40 },

  pl5: { paddingLeft: 5 },
  pr5: { paddingRight: 5 },
  pl10: { paddingLeft: 10 },
  pr10: { paddingRight: 10 },
  pl15: { paddingLeft: 15 },
  pr15: { paddingRight: 15 },
  pl20: { paddingLeft: 20 },
  pr20: { paddingRight: 20 },
  pl25: { paddingLeft: 25 },
  pr25: { paddingRight: 25 },
  pl35: { paddingLeft: 35 },
  pr35: { paddingRight: 35 },
  pl40: { paddingLeft: 40 },
  pr40: { paddingRight: 40 },

  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },
  flex6: { flex: 6 },

  row: { flexDirection: 'row' },
  col: { flexDirection: 'column' },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerX: {
    alignItems: 'center',
  },

  centerY: {
    justifyContent: 'center',
  },

  endX: {
    alignItems: 'flex-end',
  },

  endY: {
    justifyContent: 'flex-end',
  },

  spaceAround: {
    justifyContent: 'space-around',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  spaceBetweenY: {
    alignContent: 'space-between',
  },

  stretch: {
    alignSelf: 'stretch',
  },

  imgContain: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },

  picture: {
    marginTop: 20,
    width: '90%',
    height: 200,
    backgroundColor: '#000',
  },

  o_100: { opacity: 1 },
  o_90: { opacity: 0.9 },
  o_80: { opacity: 0.8 },

  fs9: { fontSize: 9 },
  fs10: { fontSize: 10 },
  fs11: { fontSize: 11.5 },
  fs12: { fontSize: 12 },
  fs14: { fontSize: 14 },
  fs16: { fontSize: 16 },
  fs18: { fontSize: 18 },
  fs20: { fontSize: 20 },
  fs24: { fontSize: 24 },

  textLeft: {
    textAlign: 'left',
  },

  textCenter: {
    textAlign: 'center',
  },

  textRight: {
    textAlign: 'right',
  },

  bold: {
    fontWeight: 'bold',
  },

  w100: {
    width: '100%',
  },
});
