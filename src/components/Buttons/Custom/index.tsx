import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const CustomButton = (
    { title = 'Custom Button', buttonStyle = {}, textStyle = {}, onPress = () => null }: { title: string, buttonStyle: object, textStyle: object, onPress: any }) => {
    return (
        <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress} >
            <Text style={[styles.text, textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton