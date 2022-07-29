import { Animated, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { primaryBg, primaryText } from '../../constants/Colors'
import { useEffect, useRef, useState } from 'react'

const QuantityManager = ({ amountAvailable, quantity, setQuantity }: { amountAvailable: number, quantity: number, setQuantity: Function }) => {

    const [amountAvailableWarn, setAmountAvailableWarn] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current
    const [targetOpacity, setTargetOpacity] = useState(0)
    const [inputValue, setInputValue] = useState('')

    const quantityText = (quantity: number) => `${quantity} unidad${quantity > 1 ? 'es' : ''}`

    const handleQuantitySelected = (number: number) => {
        setTargetOpacity(targetOpacity ? 0 : 1)
        if (!number || number < 0) return
        let lessThanAmountAvailable = amountAvailable < number
        setAmountAvailableWarn(lessThanAmountAvailable)
        setQuantity(lessThanAmountAvailable ? amountAvailable : number)
    }

    const QuantityOption = ({ option }: { option: number }) => (
        <TouchableOpacity style={[styles.optionContainer, { backgroundColor: quantity === option ? primaryBg : '#fff' }]} onPress={() => handleQuantitySelected(option)}>
            <Text style={[styles.optionText, { color: quantity === option ? primaryText : '#000' }]}>{option}</Text>
        </TouchableOpacity>
    )

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: targetOpacity,
                duration: 500,
                useNativeDriver: true
            }
        ).start()
    }, [targetOpacity])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacity} onPress={() => setTargetOpacity(targetOpacity ? 0 : 1)}>
                <Text style={styles.actualQuantity}>Cantidad seleccionada: {quantityText(quantity)}</Text>
                <Ionicons size={22} color={primaryBg} name={targetOpacity ? 'chevron-up-circle' : 'chevron-down-circle'} />
            </TouchableOpacity>
            <Text style={styles.amountAvailable}>Disponible: {quantityText(amountAvailable)}</Text>
            <Animated.View style={[styles.selectQuantity, { opacity: fadeAnim, display: targetOpacity ? 'flex' : 'none' }]}>
                {
                    [...Array(4)].map((_, index) => <QuantityOption key={'option' + index} option={index + 1} />)
                }
                <View style={[styles.optionContainer, { backgroundColor: quantity === parseInt(inputValue) ? primaryBg : '#fff' }]}>
                    <TextInput
                        placeholder='5 o más'
                        keyboardType='number-pad'
                        style={[styles.optionText, { color: quantity === parseInt(inputValue) ? primaryText : '#000' }]}
                        value={inputValue}
                        textContentType='telephoneNumber'
                        onChangeText={value => setInputValue(value)}
                        onEndEditing={() => handleQuantitySelected(parseInt(inputValue))}
                    />
                </View>
            </Animated.View>
            {
                amountAvailableWarn && (
                    <Text style={styles.inputWarn}>Solo hay {amountAvailable} unidades disponibles</Text>
                )
            }
        </View>
    )
}

export default QuantityManager