import { useEffect, useRef } from 'react'
import { Animated, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const Notification = ({ message, onPress }: { message: string, onPress: VoidFunction }) => {

    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start()
    }, [fadeAnim])

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <TouchableOpacity style={styles.touchable} onPress={onPress}>
                <Text style={styles.text}>
                    {message}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default Notification