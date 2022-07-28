import { StyleSheet } from 'react-native'
import { grey } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: '20%',
        marginVertical: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    }
})