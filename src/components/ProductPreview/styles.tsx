import { StyleSheet } from 'react-native'
import { green, grey, themeBg } from '../../constants/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: themeBg,
        borderWidth: .5,
        padding: 10
    },
    imageContainer: {
        height: 150,
        width: '100%'
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
    info: {
        marginTop: 15
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    }
})