import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CartScreen, CheckoutScreen, HomeScreen, AuthScreen, ProductDetailScreen } from '../../screens'

const MainNavigator = () => {

    const Stack = createNativeStackNavigator()

    const userId = null

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
            />
            <Stack.Screen
                name='Detail'
                component={ProductDetailScreen}
            />
            <Stack.Screen
                name='Cart'
                component={CartScreen}
            />
            <Stack.Screen
                name='Auth'
                component={AuthScreen}
            />
            <Stack.Screen
                name='Checkout'
                component={userId ? CheckoutScreen : AuthScreen}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator