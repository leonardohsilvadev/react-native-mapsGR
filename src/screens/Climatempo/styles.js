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
        fontWeight: 'bold',
        marginLeft: '10@s',
        marginVertical: '20@vs'
    },
    boxClimatempo:{        
        flexDirection: 'row', 
        alignItems: 'center',
    },
    card:{
        flexDirection: 'row',
        padding: '10@s',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60@vs'
    },
    cardBox:{
        marginTop: 10, 
        borderRadius: 20,     
        elevation: 7,
    },
    numberTemp:{
        color: COLOR.LIGHT,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    divider:{
        borderLeftWidth: 1,
        borderColor: COLOR.LIGHT,
        marginHorizontal: '20@s',
    },
    smallText: {
        fontSize: 11,
    },
    titleCard:{
        color: COLOR.LIGHT,
        fontWeight: 'bold',
        width: '100@s',
        textAlign: 'center'
    },
    date:{
        color: COLOR.LIGHT,
        fontSize: '12@s',
        textAlign: 'center'
    },
    dividerHorizontal:{        
        borderBottomWidth: 1,
        borderColor: COLOR.LIGHT,
        marginHorizontal: '0@s'
    },
    iconCard:{
        opacity: 0.6,
        color: COLOR.LIGHT
    },
    iconTitle:{
        color: COLOR.LIGHT,
        backgroundColor: COLOR.MAIN,
        padding: 7,
        borderRadius: 50,
        width: '45@s',
        height: '50@vs',
        textAlign: 'center'
    },
});
