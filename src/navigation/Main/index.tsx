import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavBar } from '../../components'
import { CartScreen, CheckoutScreen, HomeScreen, AuthScreen, ProductDetailScreen, ThankyouScreen, OrdersScreen, SearchScreen } from '../../screens'

const MainNavigator = () => {

    const Stack = createNativeStackNavigator()

    const userId = 'null'

    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerStyle: { backgroundColor: 'red' },
                header: (props) => <NavBar navigation={props.navigation} />
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
            <Stack.Screen
                name='Orders'
                component={OrdersScreen}
            />
            <Stack.Screen
                name='Search'
                component={SearchScreen}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator