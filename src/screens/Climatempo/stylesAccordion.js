import { ScaledSheet } from "react-native-size-matters";
import { COLOR } from "../../config/styles";

export const Styles = ScaledSheet.create({
    upDownIcon: {
        color: COLOR.LIGHT,
        fontSize: '20@s',
        paddingVertical: '8@vs',
        marginLeft: '-120@s',
        marginRight: '20@s'
    },
    viewInfo: {
        flexDirection: 'row',
        paddingBottom: '5@vs',
        marginTop: '20@vs',
        justifyContent: 'flex-end'
    },
    itemTitle: {
        fontSize: '10@s',
        marginTop: '5@vs',
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
    itemInfo:{
        color: COLOR.LIGHT,
        fontWeight: 'bold',
    }
});