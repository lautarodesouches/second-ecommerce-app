import { StyleSheet } from 'react-native'
import { themeBg } from '../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeBg,
    },
    contentContainer: {
        paddingHorizontal: '5%',
        flexGrow: 1,
        justifyContent: 'center'
    },
    total: {
        marginTop: 20,
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'RobotoLight'
    },
    buttonContainer: {
        marginVertical: 10
    },
    emptyText: {
        fontSize: 20,
        textAlign: 'center'
    }
})