import { FlatList, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonOutlineDanger, ButtonPrimary, CustomAlert, RenderCartItem } from '../../components'
import ButtonMuted from '../../components/Buttons/Muted'
import { styles } from './styles'
import { clearCart } from '../../store/cart.slice'
import { useState } from 'react'
import { CartItem } from '../../models/CartItem'

const CartScreen = ({ navigation }: { navigation: any }) => {

    const dispatch = useDispatch()

    const cart = useSelector((state: any) => state.cart.cart)

    const total = cart.reduce((acc: number, item: CartItem) => acc + item.subtotal, 0)

    const [showAlert, setShowAlert] = useState(false)

    const ListHeaderComponent = () => {
        if (!cart.length) return null
        return (
            <View style={styles.buttonContainer}>
                <ButtonMuted onPress={() => navigation.navigate('Home')} title='Seguir comprando' />
                <ButtonOutlineDanger onPress={() => setShowAlert(true)} title='Eliminar todos' />
                {
                    showAlert && (
                        <CustomAlert
                            setShowAlert={setShowAlert}
                            message='Estas seguro que querés limpiar el carrito?'
                            option='Eliminar'
                            optionAction={() => dispatch(clearCart())}
                        />
                    )
                }
            </View>
        )
    }

    const ListFooterComponent = () => {
        if (!cart.length) return null
        return (
            <>
                <Text style={styles.total}>Total: ${total}</Text>
                <View style={styles.buttonContainer}>
                    <ButtonPrimary onPress={() => navigation.navigate('Checkout')} title='Checkout' />
                </View>
            </>
        )
    }

    const ListEmptyComponent = () => (
        <View>
            <Text style={styles.emptyText}>El carrito se encuentra vacío</Text>
            <View style={styles.buttonContainer}>
                <ButtonPrimary onPress={() => navigation.navigate('Home')} title='Volver al inicio' />
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.contentContainer}
                data={cart}
                renderItem={({ item }) => <RenderCartItem item={item} />}
                ListHeaderComponent={ListHeaderComponent}
                ListFooterComponent={ListFooterComponent}
                ListEmptyComponent={ListEmptyComponent}
                keyExtractor={item => item.id + item.color}
            />
        </View>
    )
}

export default CartScreen