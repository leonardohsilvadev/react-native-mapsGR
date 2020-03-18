import { ScaledSheet } from "react-native-size-matters";

export const Styles = ScaledSheet.create({
    safeAreaView: {
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: '24@s',
      fontWeight: 'bold',
    },
    featuresText: {
      fontSize: '20@s',
    },
    text: {
      fontSize: '16@s'
    },
    box:{
      width: '200@s'
    },
    markerIcon:{
      width: '30@s',
      height: '40@s',
    }
});