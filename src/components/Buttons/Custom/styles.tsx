import { StyleSheet } from 'react-native'
import { themeText, themeBg } from '../../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        minWidth: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeText,
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 8,
        marginVertical: 10,
        // Shadow
        shadowColor: themeText,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3.68,
        elevation: 11
    },
    text: {
        color: themeBg,
        fontSize: 18,
        fontFamily: 'RobotoRegular'
    }
})