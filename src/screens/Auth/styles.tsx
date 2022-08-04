import { StyleSheet } from 'react-native'
import { themeBg } from '../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeBg,
        padding: '5%',
        justifyContent: 'center'
    },
    form: {
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: '5%'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20
    },
    buttonContainer: {
        marginTop: 20
    }
})