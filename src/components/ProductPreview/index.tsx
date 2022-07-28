import { Image, Text, TouchableOpacity, View } from 'react-native'
import { PRODUCT_IMAGE_URL } from '../../constants/Urls'
import PriceInfo from '../PriceInfo'
import { styles } from './styles'

const ProductPreview = ({ item, onPress }: { item: any, onPress: any }) => {

    const { id, name, price, discount, freeShipping } = item

    return (

        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: `${PRODUCT_IMAGE_URL}${id}-1.png` }} style={styles.image} />
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{name}</Text>
                <PriceInfo
                    discount={discount}
                    freeShipping={freeShipping}
                    price={price}
                />
            </View>
        </TouchableOpacity>
    )
}

export default ProductPreview