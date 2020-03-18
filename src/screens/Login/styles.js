import { ScaledSheet } from "react-native-size-matters";

export const Style = ScaledSheet.create({
    boxLogin:{
        backgroundColor: 'white',
        height: '80%',
        width: '80%',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50
    },
    logoLogin:{
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 150,
        height: 150,
        marginTop: 10
    },
    fundoNavio:{
        width: '100%',
        marginTop: 5,
        zIndex: 999,
        justifyContent: 'flex-end',
    },
    btnEntrar: {
        borderRadius: 30,
        backgroundColor: '#FF7300',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '200@s',
        fontWeight: 'bold',        
        marginTop: 40,
        justifyContent: 'center'
    },
    label:{
        color: '#FF7300',
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderColor: 'transparent'
    },
    input:{
        backgroundColor: 'rgba(30,30,30,0.1)',
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderColor: 'transparent'
    },
    title:{
        alignSelf: 'center',
        fontSize: 24, 
        textAlign: 'center', 
        color: '#1E83B4',
        marginTop: 10
    }
});