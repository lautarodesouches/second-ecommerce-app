import { StyleSheet } from 'react-native'
import { themeBg } from '../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeBg
    },
    flatList: {
        margin: 10
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'RobotoRegular'
    }
})