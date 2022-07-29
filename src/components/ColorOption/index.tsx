import { Text, TouchableOpacity } from 'react-native'
import { primaryBg, primaryText } from '../../constants/Colors'
import { capitalize } from '../../utils/functions'
import { styles } from './styles'

const ColorOption = ({ color, selectedColor, setSelectedColor }: { color: string, selectedColor: string, setSelectedColor: Function }) => (
    <TouchableOpacity
        key={color}
        style={[styles.container, { backgroundColor: selectedColor === color ? primaryBg : '#fff' }]}
        onPress={() => setSelectedColor(color)}
    >
        <Text style={[styles.text, { color: selectedColor === color ? primaryText : '#000' }]}>
            {capitalize(color)}
        </Text>
    </TouchableOpacity>
)

export default ColorOption