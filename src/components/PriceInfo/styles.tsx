import { StyleSheet } from 'react-native'
import { green, grey } from '../../constants/Colors'

export const styles = StyleSheet.create({
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