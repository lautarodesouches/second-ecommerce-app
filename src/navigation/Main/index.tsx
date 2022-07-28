import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CartScreen, CheckoutScreen, HomeScreen, ProductDetailScreen } from '../../screens'

const MainNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
            />
            <Stack.Screen
                name='Cart'
                component={CartScreen}
            />
            <Stack.Screen
                name='Checkout'
                component={CheckoutScreen}
            />
            <Stack.Screen
                name='Detail'
                component={ProductDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator