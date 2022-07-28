import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CartScreen, CheckoutScreen, HomeScreen } from '../../screens'

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
        </Stack.Navigator>
    )
}

export default MainNavigator