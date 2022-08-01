import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        padding: 15
    },
    date: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    },
    productContainer: {
        marginVertical: 10,
        borderRadius: 5, 
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff'
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