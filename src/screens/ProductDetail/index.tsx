import { useState } from 'react';
import { Image, Text, View } from 'react-native'
import { PriceInfo, Thumnail } from '../../components';
import { PRODUCT_IMAGE_URL } from '../../constants/Urls';
import { styles } from './styles'

const ProductDetailScreen = ({ route, navigation }: { route: any, navigation: any, item: any }) => {

    const { item } = route.params;

    const { id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, availableColors, description } = item

    const [numberMainImage, setNumberMainImage] = useState(1)

    return (
        <View style={styles.container}>
            <View style={styles.productContainer}>
                <View style={styles.imagesContainer}>
                    <View style={styles.mainImageContainer}>
                        <Image source={{ uri: `${PRODUCT_IMAGE_URL}${id}-${numberMainImage}.png` }} style={styles.mainImage} />
                    </View>
                    <View style={styles.thumnailImagesContainer}>
                        {
                            [...Array(availableImages)].map((e, index) => (
                                <Thumnail key={index} productId={id} imageNumber={index + 1} handleSelectImage={setNumberMainImage} numberMainImage={numberMainImage} />)
                            )
                        }
                    </View>
                </View>
                <Text style={styles.title}>{name}</Text>
                <PriceInfo
                    discount={discount}
                    freeShipping={freeShipping}
                    price={price}
                />
            </View>
        </View>
    )
}

export default ProductDetailScreen