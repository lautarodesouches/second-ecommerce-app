import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavBar } from '../../components'
import { CartScreen, CheckoutScreen, HomeScreen, LoginScreen, ProductDetailScreen, ThankyouScreen, OrdersScreen, SearchScreen, RegisterScreen, UserScreen } from '../../screens'
import { useSelector } from 'react-redux'

const MainNavigator = () => {

    const Stack = createNativeStackNavigator()

    const userId = useSelector((state: any) => state.auth.userId)
    const cart = useSelector((state: any) => state.cart.cart)

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                header: (props) => <NavBar navigation={props.navigation} />
            }}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
            />
            <Stack.Screen
                name='Search'
                component={SearchScreen}
            />
            <Stack.Screen
                name='Detail'
                component={ProductDetailScreen}
            />
            <Stack.Screen
                name='Cart'
                component={CartScreen}
            />
            <Stack.Group>
                <Stack.Screen
                    name='User'
                    component={userId ? UserScreen : LoginScreen}
                />
                <Stack.Screen
                    name='Login'
                    component={userId ? (cart.length > 0 ? CheckoutScreen : UserScreen) : LoginScreen}
                />
                <Stack.Screen
                    name='Register'
                    component={userId ? (cart.length > 0 ? CheckoutScreen : UserScreen) : RegisterScreen}
                />
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen
                    name='Checkout'
                    component={userId ? CheckoutScreen : LoginScreen}
                />
                <Stack.Screen
                    name='Thankyou'
                    component={userId ? ThankyouScreen : LoginScreen}
                />
                <Stack.Screen
                    name='Orders'
                    component={userId ? OrdersScreen : LoginScreen}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default MainNavigator