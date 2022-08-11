import { StyleSheet } from 'react-native'
import { themeBg, themeText } from '../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: '2.5%',
        backgroundColor: themeBg,
        justifyContent: 'space-around'
    },
    info: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontFamily: 'MerriweatherRegular',
        textAlign: 'center',
        color: themeText
    },
    subTitle: {
        marginVertical: 10,
        fontSize: 20,
        fontFamily: 'RobotoRegular',
        textAlign: 'center',
        color: themeText
    },
    recommendedContainer: {
        flex: 1
    },
    recommendedTitle: {
        marginTop: 30,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'RobotoRegular',
    },
})