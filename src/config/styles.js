import { ScaledSheet } from 'react-native-size-matters';

export const COLOR = {
    MAIN: '#5DB7FC',
    ACCENT: '#1E83B4',
    ORANGE: '#FF7300',
    DANGER: '#e25b50',
    WARNING: '#fca523',
    LIGHT: '#ffffff',
    LIGHT_GRAY: '#e9e9e9',
    GRAY: '#acacac',
    DARK_GRAY: '#6f6f6f',
    DARK: '#040207',
    BLACK: '#000000',
  };

export const Styles = ScaledSheet.create({
    logoLeft: {
        paddingLeft: '10@s',
        flex: 0.2,
        justifyContent: 'center'
    },
    menuIcon: {
        color: COLOR.LIGHT,
        fontSize: '30@s',
    },
    logoMiddle: {
        flex: 0.6,
        height: '74@vs',
        justifyContent: 'center',
        paddingLeft: '80@s',
        alignItems: 'flex-start'
    },
    logoModal: {
        height: '60@vs',
        width: '60@s',
    },
    logoRight: {
        // paddingRight: '10@s',
        flex: 0.2,
        justifyContent: 'center',
    },
    headerStyle: {
        height: '100@vs',
    },
    userInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    header: {
      marginTop: '10@vs',
      borderBottomWidth: 1,
      borderColor: '#DDD',
    },
    name: {
      fontSize: '20@s',
      marginLeft: '10@s',
    },
    email: {
      fontSize: '15@s',
      marginLeft: '10@s',
      marginBottom: '10@vs',
    },
    logo: {
      width: '80@s',
      height: '80@vs',
      marginVertical: '20@vs',
      marginLeft: '10@s',
    },
    avatar: {
      width: 120,
      height: 120,
      borderWidth: 3,
      borderColor: '#AAA',
      borderRadius: 60,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
});