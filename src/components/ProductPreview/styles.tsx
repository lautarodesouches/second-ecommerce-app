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
    },
    oldPrice: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 5,
        color: grey
    },
    currentPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    currentPrice: {
        textAlign: 'center',
        fontSize: 20
    },
    discount: {
        marginLeft: 5,
        color: green,
        fontSize: 16
    },
    freeShipping: {
        textAlign: 'center',
        fontSize: 20,
        color: green,
        marginTop: 7
    }
})