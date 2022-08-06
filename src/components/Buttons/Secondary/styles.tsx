import { StyleSheet } from 'react-native'
import { secondaryBg, secondaryText } from '../../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        shadowColor: secondaryBg,
        backgroundColor: secondaryBg,
        borderColor: secondaryBg
    },
    text: {
        color: secondaryText
    }
})