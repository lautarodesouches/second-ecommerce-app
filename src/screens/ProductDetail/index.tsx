import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { PriceInfo, Thumnail } from '../../components'
import { PRODUCT_IMAGE_URL } from '../../constants/Urls'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { primaryBg } from '../../constants/Colors/index';

const ProductDetailScreen = ({ route, navigation }: { route: any, navigation: any, item: any }) => {

    const { item } = route.params;

    const { id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, availableColors, description } = item

    const [numberMainImage, setNumberMainImage] = useState(1)
    const [showSelectQty, setShowSelectQty] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [quantityInputValue, setQuantityInputValue] = useState('')
    const [amountAvailableWarn, setAmountAvailableWarn] = useState(false)

    const quantityText = (quantity: number) => `${quantity} unidad${quantity > 1 ? 'es' : ''}`

    const QuantityOption = ({ option }: { option: number }) => (
        <TouchableOpacity style={styles.optionContainer} onPress={() => handleQuantitySelected(option)}>
            <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
    )

    const handleQuantitySelected = (number: number) => {
        setShowSelectQty(false)
        if (!number) return
        let lessThanAmountAvailable = amountAvailable < number
        setAmountAvailableWarn(lessThanAmountAvailable)
        setQuantity(lessThanAmountAvailable ? amountAvailable : number)
    }

    return (
        <ScrollView style={styles.container}>
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
                <View style={styles.quantityContainer}>
                    <TouchableOpacity style={styles.quantityTouchable} onPress={() => setShowSelectQty(!showSelectQty)}>
                        <Text style={styles.actualQuantity}>Cantidad seleccionada: {quantityText(quantity)}</Text>
                        <Ionicons size={22} color={primaryBg} name={showSelectQty ? 'chevron-up-circle' : 'chevron-down-circle'} />
                    </TouchableOpacity>
                    <Text style={styles.amountAvailable}>Disponible: {quantityText(amountAvailable)}</Text>
                    {
                        showSelectQty && (
                            <View style={styles.selectQuantity}>
                                {
                                    [...Array(4)].map((_, index) => <QuantityOption key={'option' + index} option={index + 1} />)
                                }
                                <View style={styles.optionContainer}>
                                    <TextInput
                                        placeholder='5 o más'
                                        keyboardType='number-pad'
                                        style={styles.optionText}
                                        value={quantityInputValue}
                                        textContentType='telephoneNumber'
                                        onFocus={() => setQuantityInputValue('5')}
                                        onChangeText={value => setQuantityInputValue(value)}
                                        onEndEditing={() => handleQuantitySelected(parseInt(quantityInputValue))}
                                    />
                                </View>
                            </View>
                        )
                    }
                    {
                        amountAvailableWarn && (
                            <Text style={styles.inputWarn}>Solo hay {amountAvailable} unidades disponibles</Text>
                        )
                    }
                </View>
                <Text>Colores disponibles:</Text>
            </View>
        </ScrollView>
    )
}

export default ProductDetailScreen