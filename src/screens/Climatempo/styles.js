import { ScaledSheet } from "react-native-size-matters";
import { Dimensions, StyleSheet } from 'react-native'
import { COLOR } from '../../config/styles';

export const style = ScaledSheet.create({    
    label:{
        color: COLOR.ORANGE,
        width: '300@vs',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderColor: 'transparent'
    },
    title:{
        fontSize: '24@s', 
        color: COLOR.ACCENT,
        marginTop: 10,
        fontWeight: 'bold'
    },
    boxClimatempo:{        
        flexDirection: 'row', 
        alignItems: 'center'
    },
    card:{
        flexDirection: 'row',
        padding: '10@s',
        borderRadius: 10,
        alignSelf: 'center',
    },
    cardBox:{
        marginTop: 10, 
        borderRadius: 20,     
        elevation: 7,
    },
    numberTemp:{
        color: COLOR.LIGHT
    },
    divider:{
        borderLeftWidth: 1,
        borderColor: COLOR.LIGHT,
        marginHorizontal: '20@s'
    },
    smallText: {
        fontSize: 11
    },
    titleCard:{
        color: COLOR.LIGHT,
        marginHorizontal: '20@s',
        fontWeight: 'bold'
    }
});