import { StyleSheet } from 'react-native'
import { themeBg } from '../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: '5%',
        backgroundColor: themeBg,
        justifyContent: 'space-between'
    },
    form: {
        flex: 0.9,
        justifyContent: 'space-between'
    },
    formGroup: {
        marginVertical: 10,
        padding: '4%',
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    col: {
        flex: 1
    },
    buttonContainer: {
        flex: 0.1
    },
    state: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'RobotoRegular'
    }
})