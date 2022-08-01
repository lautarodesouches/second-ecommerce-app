import { StyleSheet } from 'react-native'
import { themeBg, themeText } from '../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: '2.5%',
        backgroundColor: themeBg,
        justifyContent: 'space-between'
    },
    info: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: themeText
    },
    subTitle: {
        marginVertical: 10,
        fontSize: 20,
        textAlign: 'center',
        color: themeText
    },
    recommendedContainer: {
        flex: 0.6
    },
    recommendedTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },
})