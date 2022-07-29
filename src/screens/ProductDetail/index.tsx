import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ColorOption, Notification, PriceInfo, ButtonPrimary, ButtonSecondary, Thumnail, QuantityManager } from '../../components'
import { PRODUCT_IMAGE_URL } from '../../constants/Urls'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'

const ProductDetailScreen = ({ route, navigation }: { route: any, navigation: any, item: any }) => {

    const { item } = route.params

    const { id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, availableColors, description } = item

    const [numberMainImage, setNumberMainImage] = useState(1)
    const [showNotification, setShowNotification] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor] = useState(availableColors[0])

    const handleAddToCart = () => {
        setShowNotification(true)
    }

    const handleBuyNow = () => {
        navigation.navigate(
            'Cart',
            {
                item: {
                    id,
                    name,
                    price,
                    quantity,
                    selectedColor
                }
            }
        )
    }

    return (
        <View style={styles.container}>
            {
                showNotification && <Notification message='Producto agregardo' onPress={() => setShowNotification(false)} />
            }
            <ScrollView style={styles.scroll}>
                <View style={styles.productContainer}>
                    <View style={styles.nav}>
                        <TouchableOpacity onPress={() => console.log(category)}>
                            <Text style={styles.navText}>{category}</Text>
                        </TouchableOpacity>
                        <Text style={styles.navText}>{' > '}</Text>
                        <TouchableOpacity onPress={() => console.log(brand)}>
                            <Text style={styles.navText}>{brand}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imagesContainer}>
                        <View style={styles.mainImageContainer}>
                            <Image source={{ uri: `${PRODUCT_IMAGE_URL}${id}-${numberMainImage}.png` }} style={styles.mainImage} />
                        </View>
                        <View style={styles.thumnailImagesContainer}>
                            {
                                [...Array(availableImages)].map((_, index) => (
                                    <Thumnail key={'thumnail' + index} productId={id} imageNumber={index + 1} handleSelectImage={setNumberMainImage} numberMainImage={numberMainImage} />)
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
                    <Text style={styles.description}>{description}</Text>
                    <View style={styles.statsContainer}>
                        <Text style={styles.statText}>{sold} vendidos</Text>
                        <Text style={styles.statText}>{opinions} opiniones</Text>
                    </View>
                    <View style={styles.stars}>
                        {
                            [...Array(5)].map((_, index) =>
                                <Ionicons key={'star' + index} size={28} color='#cc9900' name={stars >= index + 1 ? 'star' : (stars <= index ? 'star-outline' : 'star-half-sharp')} />
                            )
                        }
                    </View>
                    <QuantityManager
                        amountAvailable={amountAvailable}
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                    <View style={styles.colorsContainer}>
                        <Text style={styles.colorsTitle}>Colores disponibles:</Text>
                        <View style={styles.colorsOptionsContainer}>
                            {
                                availableColors.map((color: string) => <ColorOption key={color} color={color} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />)
                            }
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <ButtonSecondary onPress={handleAddToCart} title='Agregar al carrito' />
                        <ButtonPrimary onPress={handleBuyNow} title='Comprar ahora' />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProductDetailScreen