import { StyleSheet } from 'react-native'
import { primaryBg, primaryText } from '../../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        shadowColor: primaryBg,
        backgroundColor: primaryBg,
        borderColor: primaryBg
    },
    text: {
        color: primaryText
    }
})