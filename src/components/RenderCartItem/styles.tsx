import { StyleSheet } from 'react-native'
import { grey } from '../../constants/Colors'

export const styles = StyleSheet.create({
    infoContainer: {
        marginTop: 10
    },
    placeholder: {
        fontSize: 14,
        color: grey,
        textAlign: 'center',
        fontFamily: 'RobotoLight'
    },
    value: {
        marginTop: 5,
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'RobotoLight'
    },
    container: {
        borderColor: grey,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    imageContainer: {
        height: 100,
        width: '100%'
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
})