import { Text, View } from 'react-native'
import { PrimaryButton, SecondaryButton } from '../../components'
import { styles } from './styles'

const CartScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <Text>CartScreen</Text>
            <PrimaryButton
                onPress={() => navigation.navigate('Cart')}
                title='Cart'
            />
            <SecondaryButton
                onPress={() => navigation.navigate('Checkout')}
                title='Checkout'
            />
        </View>
    )
}

export default CartScreen