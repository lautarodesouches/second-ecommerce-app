import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { PRODUCT_IMAGE_URL } from '../../constants/Urls'
import { styles } from './styles'

const OrderPreview = ({ order }: { order: any }) => {

    const RenderItem = ({ item }: { item: any }) => (
        <TouchableOpacity style={styles.productContainer}>
            <Text style={styles.date}>01/08/22</Text>
            <View style={styles.row}>
                <View style={styles.section}>
                    <Image source={{ uri: `${PRODUCT_IMAGE_URL}${1}-1.png` }} style={styles.image} />
                </View>
                <View style={styles.section}>
                    <Text style={[styles.state]}>{item.state || 'En camino'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={[1, 2]}
                renderItem={RenderItem}
            />
        </View>
    )
}

export default OrderPreview