enum RoutesEnum {
  INITIAL = 'Initial',
  SIGN_UP_LOGIN = 'SignUpLogin',
  MAIN = 'Main',
  WORK_AREA = 'Work Area',
  TUTORIAL = 'Tutorial',
}

export type RootStackParamList = {
  [RoutesEnum.INITIAL]: undefined;
  [RoutesEnum.SIGN_UP_LOGIN]: undefined;
  [RoutesEnum.MAIN]: undefined;
  [RoutesEnum.WORK_AREA]: undefined;
  [RoutesEnum.TUTORIAL]: undefined;
};

export default RoutesEnum;
