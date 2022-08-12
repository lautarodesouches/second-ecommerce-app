import { StyleSheet } from 'react-native'
import { themeBg } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeBg,
        padding: '2.5%'
    },
    loadingText: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'RobotoRegular'
    },
    errorText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'RobotoRegular',
        marginBottom: 15
    }
})