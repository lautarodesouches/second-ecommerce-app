import { Text, View } from 'react-native'
import { styles } from './styles'

const PriceInfo = ({ discount, price, freeShipping }: { discount: number, price: number, freeShipping: boolean }) => {
    return (
        <>
            {
                !!discount && <Text style={styles.oldPrice}>${price}</Text>
            }
            <View style={styles.currentPriceContainer}>
                <Text style={styles.currentPrice}>
                    ${discount ? (Math.round(price - price * discount / 100)) : price}
                </Text>
                {
                    !!discount && <Text style={styles.discount}>{discount}% OFF</Text>
                }
            </View>
            {
                freeShipping && (
                    <Text style={styles.freeShipping}>Envio Gratis!</Text>
                )
            }
        </>
    )
}

export default PriceInfo