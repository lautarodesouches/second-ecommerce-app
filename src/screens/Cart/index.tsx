import { FlatList, Image, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonOutlineDanger, ButtonPrimary, CloseButton, CustomAlert } from '../../components'
import ButtonMuted from '../../components/Buttons/Muted'
import { PRODUCT_IMAGE_URL } from '../../constants/Urls'
import { styles } from './styles'
import { capitalize } from '../../utils/functions'
import { deleteCartItem } from '../../store/product.slice'
import { useState } from 'react'

const CartScreen = ({ navigation }: { navigation: any }) => {

    const dispatch = useDispatch()

    const [showAlert, setShowAlert] = useState(false)
    const [deleteId, setDeleteId] = useState(0)

    const cart = useSelector((state: any) => state.product.cart)

    const handleDeleteItem = () => {
        dispatch(deleteCartItem(deleteId))
    }

    const handleShowAlert = (id: number) => {
        setDeleteId(id)
        setShowAlert(true)
    }

    const Info = ({ placeholder, value }: { placeholder: string, value: string | number }) => (
        <View style={styles.infoContainer}>
            <Text style={styles.placeholder}>{placeholder}:</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )

    const RenderItem = ({ item, index }: { item: any, index: number }) => (
        <View key={index} style={styles.itemContainer}>
            <CloseButton onPress={() => handleShowAlert(item.id)} />
            <View style={styles.imageContainer}>
                <Image source={{ uri: `${PRODUCT_IMAGE_URL}${item.id}-1.png` }} style={styles.image} />
            </View>
            <Info placeholder='Nombre' value={item.name} />
            <Info placeholder='Color' value={capitalize(item.color)} />
            <Info placeholder='Cantidad' value={item.quantity} />
            <Info placeholder='Subtotal' value={item.subtotal} />
        </View>
    )

    const ListHeaderComponent = () => {
        if (!cart.length) return null
        return (
            <View style={styles.buttonContainer}>
                <ButtonMuted onPress={() => navigation.navigate('Home')} title='Seguir comprando' />
                <ButtonOutlineDanger onPress={() => console.log('delete')} title='Eliminar todos' />
            </View>
        )
    }

    const ListFooterComponent = () => {
        if (!cart.length) return null
        return (
            <>
                <Text style={styles.total}>Total: $123</Text>
                <View style={styles.buttonContainer}>
                    <ButtonPrimary onPress={() => navigation.navigate('Checkout')} title='Checkout' />
                </View>
            </>
        )
    }

    const ListEmptyComponent = () => (
        <>
            <Text style={styles.emptyText}>El carrito se encuentra vacío</Text>
            <View style={styles.buttonContainer}>
                <ButtonPrimary onPress={() => navigation.navigate('Home')} title='Volver al inicio' />
            </View>
        </>
    )

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.contentContainer}
                data={cart}
                renderItem={RenderItem}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
                ListEmptyComponent={ListEmptyComponent}
            />
            {
                showAlert && (
                    <CustomAlert
                        setShowAlert={setShowAlert}
                        message='Estas seguro que querés eliminar?'
                        option='Eliminar'
                        optionAction={handleDeleteItem}
                    />
                )
            }
        </View>
    )
}

export default CartScreen