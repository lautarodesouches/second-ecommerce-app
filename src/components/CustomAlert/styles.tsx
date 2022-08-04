import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    alert: {
        padding: 10,
        width: '70%',
        height: '40%',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 99,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})