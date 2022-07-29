import { StyleSheet } from 'react-native'
import { grey } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
    },
    touchableOpacity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    actualQuantity: {
        textAlign: 'center',
        fontSize: 18,
        marginRight: 5
    },
    amountAvailable: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 17
    },
    selectQuantity: {
        alignSelf: 'center',
        width: '50%',
        borderColor: grey,
        borderWidth: 1,
        top: 70,
        position: 'absolute',
        marginTop: 10,
        zIndex: 99,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        backgroundColor: '#fff'
    },
    optionContainer: {
        paddingVertical: 5,
        borderColor: '#e1e1e1',
        borderBottomWidth: 1
    },
    optionText: {
        fontSize: 18,
        textAlign: 'center'
    },
    inputWarn: {
        marginTop: 15,
        color: 'crimson',
        fontSize: 15,
        textAlign: 'center'
    }
})