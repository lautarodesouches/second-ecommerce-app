import { Image, Text, View } from 'react-native'
import { PRODUCT_IMAGE_URL } from '../../constants/Urls'
import { styles } from './styles'

const OrderPreview = ({ order }: { order: any }) => {

    const date = new Date(order.date.seconds * 1000)
    const itemId = order.items[0].id

    const MILLISECONDS_IN_A_WEEK = 604800000

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</Text>
            <View style={styles.row}>
                <View style={styles.section}>
                    <Image source={{ uri: `${PRODUCT_IMAGE_URL}${itemId}-1.png` }} style={styles.image} />
                </View>
                <View style={styles.section}>
                    <Text style={[styles.state]}>{(new Date().getTime() - date.getTime()) < MILLISECONDS_IN_A_WEEK ? 'En camino' : 'Entregado'}</Text>
                </View>
            </View>
        </View>
    )
}

export default OrderPreview