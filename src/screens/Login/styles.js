import { ScaledSheet } from "react-native-size-matters";
import { Dimensions } from 'react-native'
import { COLOR } from '../../config/styles';

export const style = ScaledSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    boxLogin:{
        backgroundColor: 'white',
        height: '600@vs',
        width: '300@s',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },
    logoLogin:{
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 150,
        height: 150,
        marginTop: '10@vs'
    },
    fundoNavio:{
        width: '100%',
        zIndex: 999,
    },
    btnEntrar: {
        borderRadius: 30,
        backgroundColor: COLOR.ORANGE,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '200@s',
        fontWeight: 'bold',        
        marginTop: '40@vs',
        justifyContent: 'center'
    },
    label:{
        color: COLOR.ORANGE,
        width: '300@vs',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderColor: 'transparent'
    },
    input:{
        backgroundColor: 'rgba(30,30,30,0.1)',
        width: '250@s',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderColor: 'transparent'
    },
    title:{
        alignSelf: 'center',
        fontSize: '24@s', 
        textAlign: 'center', 
        color: COLOR.ACCENT,
        marginTop: 10
    }
});