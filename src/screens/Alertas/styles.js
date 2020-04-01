import { ScaledSheet } from "react-native-size-matters";
import { COLOR } from "../../config/styles";

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
        marginRight: '70@vs',
        color: COLOR.LIGHT,
        fontWeight: 'bold',
        fontSize: '12@s',
    },
    alarmIcon: {
        color: COLOR.LIGHT,
        opacity: 0.15,
        fontSize: '36@s',
    },
    upDownIcon: {
        color: COLOR.LIGHT,
        fontSize: '20@s',
        paddingVertical: '8@vs',    
        marginLeft: '-5@s'
    },
    viewInfo: {
        flexDirection: 'row',
        marginTop: '10@vs'
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
    startDate: {
        color: COLOR.LIGHT,
        fontSize: '10@s',
        fontWeight: 'bold',
        marginRight: '20@vs'
    },
    stopIcon: {
        color: COLOR.LIGHT,
        fontSize: '14@s',
        marginRight: '2@vs',
        opacity: 0.5
    },
    endDate: {
        color: COLOR.LIGHT,
        fontSize: '10@s',
        fontWeight: 'bold'
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
    messageIcon: {
        color: COLOR.LIGHT,
        fontSize: '12@s',
        marginRight: '2@vs',
        opacity: 0.5
    },
    message: {
        color: COLOR.LIGHT,
        fontSize: '10@s',
        flex: 1,
        flexWrap: 'wrap'
    },
    iconTitle:{
        color: COLOR.LIGHT,
        backgroundColor: COLOR.MAIN,
        padding: 4,
        borderRadius: 50,
        width: '40@s',
        height: '45@vs',
        textAlign: 'center'
    },
});