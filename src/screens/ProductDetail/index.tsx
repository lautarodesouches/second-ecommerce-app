import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ColorOption, Notification, PriceInfo, ButtonPrimary, ButtonSecondary, Thumnail, QuantityManager, ButtonDanger, Loading } from '../../components'
import { PRODUCT_IMAGE_URL } from '../../constants/Urls'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/cart.slice'
import { CartItem } from '../../models/CartItem'
import { setGlobalQuery } from '../../store/search.slice'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../utils/firebaseConfig'

const ProductDetailScreen = ({ route, navigation }: { route: any, navigation: any, item: any }) => {

    const dispatch = useDispatch()

    const cart = useSelector((state: any) => state.cart.cart)

    const { itemId } = route.params

    const [item, setItem] = useState<any>({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const [numberMainImage, setNumberMainImage] = useState(1)
    const [showNotification, setShowNotification] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor] = useState('')

    const { id, name, brand, category, price, discount, sold, opinions, stars, amountAvailable, freeShipping, availableImages, availableColors = [], description } = item

    const itemsInCart = cart.filter((item: any) => item.id === itemId)

    let quantityInCart = 0

    if (itemsInCart.length > 0) quantityInCart = itemsInCart.reduce((acc: number, item: CartItem) => acc + item.quantity, 0)

    const newAmountAvailable = amountAvailable - quantityInCart
    const shippingCost = freeShipping ? 0 : quantity * 500
    const getPrice = discount ? (Math.round(price - price * discount / 100)) : price

    const handleAddProduct = (redirect: boolean) => {

        dispatch(
            addToCart(
                new CartItem(id, name, selectedColor, quantity, getPrice, shippingCost, brand)
            )
        )

        redirect
            ?
            navigation.navigate('Cart')
            :
            setShowNotification(true)

    }

    const search = (query: string) => {
        dispatch(setGlobalQuery(query))
        navigation.navigate('Search')
    }

    useEffect(() => {
        (async function () {
            const querySnapshot = query(collection(db, 'products'), where('id', '==', parseInt(itemId)))
            return await getDocs(querySnapshot)
        })()
            .then(result => {
                if (result.docs.length < 1) throw new Error('No se encontró el producto')
                const item: any = result.docs.map(doc => ({ id: doc.id, ...doc.data() }))[0]
                setItem(item)
                setSelectedColor(item.availableColors[0])
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }, [itemId, cart])

    return (
        <Loading loading={loading} error={error} setError={setError} navigate={navigation.navigate} currentScreen='Home' /*Detail needs id*/>
            <View style={styles.container}>
                {
                    showNotification && <Notification message='Producto agregado al carrito' onPress={() => setShowNotification(false)} />
                }
                <ScrollView style={styles.scroll}>
                    <View style={styles.productContainer}>
                        <View style={styles.nav}>
                            <TouchableOpacity onPress={() => search(category)}>
                                <Text style={styles.navText}>{category}</Text>
                            </TouchableOpacity>
                            <Text style={[styles.navText, { color: '#000' }]}>{' > '}</Text>
                            <TouchableOpacity onPress={() => search(brand)}>
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
                                        <Thumnail key={index} productId={id} imageNumber={index + 1} handleSelectImage={setNumberMainImage} numberMainImage={numberMainImage} />)
                                    )
                                }
                            </View>
                        </View>
                        <Text style={styles.title}>{name}</Text>
                        <PriceInfo
                            discount={discount}
                            shippingCost={shippingCost}
                            showShippingCost={true}
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
                                    <Ionicons key={index} size={28} color='#cc9900' name={stars >= index + 1 ? 'star' : (stars <= index ? 'star-outline' : 'star-half-sharp')} />
                                )
                            }
                        </View>
                        <QuantityManager
                            amountAvailable={newAmountAvailable}
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
                            {
                                newAmountAvailable > 0
                                    ?
                                    <>
                                        <ButtonSecondary onPress={() => handleAddProduct(false)} title='Agregar al carrito' />
                                        <ButtonPrimary onPress={() => handleAddProduct(true)} title='Comprar ahora' />
                                    </>
                                    :
                                    <ButtonDanger onPress={() => { }} title='No hay mas disponibles' />
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Loading>
    )
}

export default ProductDetailScreen