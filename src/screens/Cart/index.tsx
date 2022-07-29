import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { ButtonDanger, ButtonPrimary, ButtonSecondary } from '../../components'
import ButtonMuted from '../../components/Buttons/Muted'
import { PRODUCT_IMAGE_URL } from '../../constants/Urls'
import { products } from '../../utils/products'
import { styles } from './styles'

const CartScreen = ({ navigation }: { navigation: any }) => {

    const cart = [
        products[0],
        products[10],
        products[19]
    ]

    const Info = ({ placeholder, value }: { placeholder: string, value: string | number }) => (
        <View style={styles.infoContainer}>
            <Text style={styles.placeholder}>{placeholder}:</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )

    const renderItem = ({ item, index }: { item: any, index: number }) => {
        let quantity = Math.round(Math.random() * 20 + 1)
        return (
            <View key={index} style={styles.itemContainer}>
                <TouchableOpacity style={styles.deleteTouchable} onPress={() => console.log(item.id)}>
                    <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: `${PRODUCT_IMAGE_URL}${item.id}-1.png` }} style={styles.image} />
                </View>
                <Info placeholder='Nombre' value={item.name} />
                <Info placeholder='Color' value={item.availableColors[0]} />
                <Info placeholder='Cantidad' value={quantity} />
                <Info placeholder='Subtotal' value={`$${quantity * item.price}`} />
            </View>
        )
    }

    const ListHeaderComponent = () => (
        <View style={styles.buttonContainer}>
            <ButtonMuted onPress={() => navigation.navigate('Home')} title='Seguir comprando' />
            <ButtonDanger onPress={() => console.log('delete')} title='Eliminar todos' />
        </View>
    )

    const ListFooterComponent = () => (
        <>
            <Text style={styles.total}>Total: $123</Text>
            <View style={styles.buttonContainer}>
                <ButtonPrimary onPress={() => navigation.navigate('Checkout')} title='Checkout' />
            </View>
        </>
    )

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.contentContainer}
                data={cart}
                renderItem={renderItem}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
            />
        </View>
    )
}

export default CartScreen