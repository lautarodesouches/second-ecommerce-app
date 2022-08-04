import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const CloseButton = ({ onPress }: { onPress: VoidFunction, }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>X</Text>
        </TouchableOpacity>
    )
}

export default CloseButton