import { Text, TouchableOpacity } from 'react-native'
import { primaryBg, primaryText } from '../../constants/Colors'
import { capitalize } from '../../utils/functions'
import { styles } from './styles'

const ColorOption = ({ color, selectedColor, setSelectedColor }: { color: string, selectedColor: string, setSelectedColor: Function }) => {
    let isColorSelected = selectedColor === color
    return (
        <TouchableOpacity
            key={color}
            style={[styles.container, { backgroundColor: isColorSelected ? primaryBg : '#fff', borderColor: isColorSelected ? primaryBg : '#e1e1e1' }]}
            onPress={() => setSelectedColor(color)}
        >
            <Text style={[styles.text, { color: isColorSelected ? primaryText : '#000' }]}>
                {capitalize(color)}
            </Text>
        </TouchableOpacity>
    )
}

export default ColorOption