import { StyleSheet } from 'react-native'
import { secondaryBg, secondaryText } from '../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 10,
        backgroundColor: secondaryBg,
        borderColor: secondaryText,
        borderWidth: 1,
        zIndex: 99,
        borderRadius: 5
    },
    touchable: {
        flex: 1
    },
    text: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: secondaryText,
        fontSize: 16
    }
})