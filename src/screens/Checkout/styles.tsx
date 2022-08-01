import { StyleSheet } from 'react-native'
import { themeBg } from '../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: themeBg,
        padding: '5%',
        justifyContent: 'space-between'
    },
    form: {
        padding: '5%',
        borderRadius: 5,
        backgroundColor: '#fff'
    }
})