import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavBar } from '../../components'
import { CartScreen, CheckoutScreen, HomeScreen, LoginScreen, ProductDetailScreen, ThankyouScreen, OrdersScreen, SearchScreen, RegisterScreen } from '../../screens'

const MainNavigator = () => {

    const Stack = createNativeStackNavigator()

    const userId = undefined

    return (
        <Stack.Navigator
            initialRouteName='Register'
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
                    name='Login'
                    component={LoginScreen}
                />
                <Stack.Screen
                    name='Register'
                    component={RegisterScreen}
                />
            </Stack.Group>
            <Stack.Group
                navigationKey={userId ? 'user' : 'guest'}
            >
                <Stack.Screen
                    name='Checkout'
                    component={userId ? CheckoutScreen : RegisterScreen}
                />
                <Stack.Screen
                    name='Thankyou'
                    component={userId ? ThankyouScreen : RegisterScreen}
                />
                <Stack.Screen
                    name='Orders'
                    component={userId ? OrdersScreen : RegisterScreen}
                />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default MainNavigator