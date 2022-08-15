import { Text, View } from 'react-native'
import { currencyFormat } from '../../utils/functions'
import { styles } from './styles'

const PriceInfo = ({ discount, price, shippingCost, showShippingCost }: { discount: number, price: number, shippingCost: number, showShippingCost: boolean }) => {
    return (
        <>
            {
                !!discount && <Text style={styles.oldPrice}>{currencyFormat(price)}</Text>
            }
            <View style={styles.currentPriceContainer}>
                <Text style={styles.currentPrice}>
                    {currencyFormat(discount ? (Math.round(price - price * discount / 100)) : price)}
                </Text>
                {
                    !!discount && <Text style={styles.discount}>{discount}% OFF</Text>
                }
            </View>
            {
                shippingCost === 0
                    ?
                    <Text style={styles.freeShipping}>Envio Gratis!</Text>
                    :
                    (showShippingCost && <Text style={styles.shippingCost}>Envio: {currencyFormat(shippingCost)}</Text>)
            }
        </>
    )
}

export default PriceInfo