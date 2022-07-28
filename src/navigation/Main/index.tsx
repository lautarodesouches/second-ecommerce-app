import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '../../screens'

const MainNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator