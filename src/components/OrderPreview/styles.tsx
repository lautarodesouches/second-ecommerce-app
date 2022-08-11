import { StyleSheet } from 'react-native'
import { secondaryBg } from '../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderRadius: 5,
        borderColor: secondaryBg,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },
    date: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        height: 75
    },
    section: {
        flex: .5,
        justifyContent: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        marginRight: 20
    },
    state: {
        textAlign: 'center',
        fontSize: 18
    },
    button: {

    },
    buttonText: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 18
    }
})