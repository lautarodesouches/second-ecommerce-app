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
    loadingText: {
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'RobotoRegular'
    }
})