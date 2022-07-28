import { StyleSheet } from 'react-native'
import { themeText, themeBg } from '../../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeText,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 7,
        marginVertical: 5,
        // Shadow
        shadowColor: themeText,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3.68,
        elevation: 6
    },
    text: {
        color: themeBg,
        fontSize: 18
    }
})