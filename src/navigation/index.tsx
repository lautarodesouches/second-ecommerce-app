import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import MainNavigator from './Main'
import { primaryBg } from '../constants/Colors/index';

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor={primaryBg}
                barStyle='light-content'
            />
            <MainNavigator />
        </NavigationContainer>
    )
}

export default AppNavigation