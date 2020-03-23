import { ScaledSheet } from "react-native-size-matters";
import { COLOR } from "../../config/styles";
import { Dimensions } from "react-native";

export const Styles = ScaledSheet.create({
    searchBar: {
        marginHorizontal: '20@s',
        paddingHorizontal: '10@s',
        marginBottom: '20@vs',
        backgroundColor: COLOR.LIGHT_GRAY,
    },
    input: {
        height: '40@vs',
        fontSize: '14@s',
        borderColor: COLOR.LIGHT_GRAY,
    },
    iconTitle:{
        color: COLOR.LIGHT,
        backgroundColor: COLOR.MAIN,
        padding: 3,
        borderRadius: 50,
        width: '40@s',
        height: '41@vs',
        textAlign: 'center'
    },
    btnEntrar: {
        borderRadius: 30,
        backgroundColor: COLOR.ORANGE,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '300@s',
        fontWeight: 'bold',    
        marginBottom: '20@vs',
        justifyContent: 'center'
    }, 
    label:{
        paddingLeft:'20@s', 
        paddingBottom: '4@vs', 
        color: COLOR.ORANGE, 
        fontSize: '14@s'
    }
});