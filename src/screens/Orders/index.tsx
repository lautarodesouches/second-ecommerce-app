import { View } from 'react-native'
import { OrderPreview } from '../../components'
import { styles } from './styles'

const OrdersScreen = () => {
    return (
        <View style={styles.container}>
            <OrderPreview order={{name: 'sda'}} />
        </View>
    )
}

export default OrdersScreen