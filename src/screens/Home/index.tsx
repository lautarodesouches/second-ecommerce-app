import { Text, View } from 'react-native'
import { PrimaryButton, SecondaryButton } from '../../components'
import { styles } from './styles'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <PrimaryButton title='Cart' onPress={() => console.log('Test')} />
        </View>
    )
}

export default HomeScreen