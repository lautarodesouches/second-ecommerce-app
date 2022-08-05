import { StyleSheet } from 'react-native'
import { themeBg } from '../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeBg,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 26,
        fontFamily: 'RobotoRegular',
        textAlign: 'center'
    },
    infoContainer: {
        marginTop: 20
    },
    infoText: {
        fontSize: 18,
        fontFamily: 'RobotoRegular',
        textAlign: 'center'
    },
})