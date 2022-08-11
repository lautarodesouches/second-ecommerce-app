import { Image, Text, TouchableOpacity, View } from 'react-native'
import { PRODUCT_IMAGE_URL } from '../../constants/Urls'
import PriceInfo from '../PriceInfo'
import { styles } from './styles'

const ProductPreview = ({ item, navigation }: { item: any, navigation: any }) => {

    const { id, name, price, discount, freeShipping } = item

    const handleProductSelect = () => navigation.navigate('Detail', { itemId: id })

    const shippingCost = freeShipping ? 0 : 500

    return (
        <TouchableOpacity style={styles.container} onPress={handleProductSelect}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: `${PRODUCT_IMAGE_URL}${id}-1.png` }} style={styles.image} />
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{name}</Text>
                <PriceInfo
                    discount={discount}
                    shippingCost={shippingCost}
                    showShippingCost={false}
                    price={price}
                />
            </View>
        </TouchableOpacity>
    )
}

export default ProductPreview