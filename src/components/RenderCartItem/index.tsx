import { Image, Text, View } from 'react-native'
import { PRODUCT_IMAGE_URL } from '../../constants/Urls'
import CloseButton from '../Buttons/Close'
import CustomAlert from '../CustomAlert'
import { styles } from './styles'
import { useState } from 'react'
import { capitalize, currencyFormat } from '../../utils/functions'
import { useDispatch } from 'react-redux'
import { deleteCartItem } from '../../store/cart.slice'

const Info = ({ placeholder, value }: { placeholder: string, value: string | number }) => (
    <View style={styles.infoContainer}>
        <Text style={styles.placeholder}>{placeholder}:</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
)

const RenderCartItem = ({ item }: { item: any }) => {

    const dispatch = useDispatch()

    const [showAlert, setShowAlert] = useState(false)

    const { id, color, name, quantity, price, shipping, subtotal } = item

    return (
        <View style={styles.container}>
            <CloseButton onPress={() => setShowAlert(true)} />
            <View style={styles.imageContainer}>
                <Image source={{ uri: `${PRODUCT_IMAGE_URL}${id}-1.png` }} style={styles.image} />
            </View>
            <Info placeholder='Nombre' value={name} />
            <View style={{ flexDirection: 'row' }}>
                <Info placeholder='Color' value={capitalize(color)} />
                <Info placeholder='Envio' value={currencyFormat(shipping)} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Info placeholder='Cantidad' value={quantity} />
                <Info placeholder='Precio' value={currencyFormat(price)} />
            </View>
            <Info placeholder='Subtotal' value={currencyFormat(subtotal)} />
            {
                showAlert && (
                    <CustomAlert
                        setShowAlert={setShowAlert}
                        message='Estas seguro que querés eliminar?'
                        option='Eliminar'
                        optionAction={() => dispatch(deleteCartItem({ id, color }))}
                    />
                )
            }
        </View>
    )
}

export default RenderCartItem