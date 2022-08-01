import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CartScreen, CheckoutScreen, HomeScreen, AuthScreen, ProductDetailScreen, ThankyouScreen } from '../../screens'

const MainNavigator = () => {

    const Stack = createNativeStackNavigator()

    const userId = 'null'

    return (
        <Stack.Navigator
            initialRouteName='Thankyou'
            screenOptions={{
                headerShown: false
            }}
        >
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
            <Stack.Screen
                name='Thankyou'
                component={ThankyouScreen}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator