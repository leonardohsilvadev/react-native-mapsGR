import { ScaledSheet } from "react-native-size-matters";
import { COLOR } from "../../config/styles";
import { Dimensions } from "react-native";

export const Styles = ScaledSheet.create({
    passagensBox: {
        paddingHorizontal: '20@s',
        marginBottom: '20@vs',
    },
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
    gradient: {
        marginHorizontal: '20@s',
        marginBottom: '20@vs',
        borderRadius: 10
    },
    bellIcon: {
        fontSize: '14@s',
        color: COLOR.LIGHT,
        paddingRight: '10@vs',
        paddingVertical: '8@vs'
    },
    accordionTitle: {
        paddingBottom: '24@vs',
        marginRight: '70@vs',
        color: COLOR.LIGHT,
        fontWeight: 'bold',
        fontSize: '12@s',
        paddingVertical: '8@vs'
    },
    alarmIcon: {
        color: COLOR.LIGHT,
        opacity: 0.15,
        fontSize: '36@s',
    },
    upDownIcon: {
        color: COLOR.LIGHT,
        fontSize: '20@s',
        paddingVertical: '8@vs'
    },
    viewInfo: {
        flexDirection: 'row',
        paddingBottom: '5@vs'
    },
    playIcon: {
        color: COLOR.LIGHT,
        fontSize: '14@s',
        marginRight: '2@vs',
        opacity: 0.5
    },
    itemTitle: {
        fontSize: '10@s'
    },
    clockIcon: {
        color: COLOR.LIGHT,
        fontSize: '12@s',
        marginRight: '2@vs',
        opacity: 0.5
    },
    shipVelocity: {
        color: COLOR.LIGHT,
        fontSize: '10@s',
        fontWeight: 'bold',
        marginRight: '24@vs'
    },
    shipIcon: {
        color: COLOR.LIGHT,
        fontSize: '10@s',
        marginRight: '2@vs',
        opacity: 0.5
    },
    shipName: {
        color: COLOR.LIGHT,
        fontSize: '10@s',
        fontWeight: 'bold'
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
    card:{
        flexDirection: 'row',
        padding: '10@s',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '90@vs'
    },
    smallText: {
        fontSize: 11,
        fontWeight: 'normal'
    },
    secondText: {
        fontSize: 11,
        marginRight: '10@s'
    },
    titleCard:{
        color: COLOR.BLACK,
        fontWeight: 'bold',
        width: '200@s',
    },
    iconCard:{
        color: COLOR.SHIP_ICON
    },
    numberTemp:{
        color: COLOR.BLACK,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    cardBox:{
        marginVertical: 10, 
        borderRadius: 10,     
        elevation: 7,
    },
    infosPassagem:{
        width: '300@s',
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: '20@s',
    },
    value: {
        fontWeight: 'bold',
        marginRight: 10
    },
    secondIcon:{
        color: COLOR.GRAY,
        opacity: 0.7,
        fontSize: 12,
        marginRight: 10
    },    
});