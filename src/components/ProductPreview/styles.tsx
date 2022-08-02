import { StyleSheet } from 'react-native'
import { themeBg } from '../../constants/Colors'

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
        fontFamily: 'RobotoRegular',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10
    }
})