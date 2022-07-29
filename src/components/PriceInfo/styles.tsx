import { StyleSheet } from 'react-native'
import { green, grey } from '../../constants/Colors'

export const styles = StyleSheet.create({
    oldPrice: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 5,
        color: grey,
        textDecorationLine: 'line-through'
    },
    currentPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    currentPrice: {
        textAlign: 'center',
        fontSize: 24
    },
    discount: {
        marginLeft: 5,
        color: green,
        fontSize: 18,
        marginBottom: 2
    },
    freeShipping: {
        textAlign: 'center',
        fontSize: 18,
        color: green,
        marginTop: 7
    }
})