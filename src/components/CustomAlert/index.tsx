import { Animated, Modal, Text, View } from 'react-native'
import CloseButton from '../Buttons/Close'
import ButtonDanger from '../Buttons/Danger'
import { styles } from './styles'
import ButtonMuted from '../Buttons/Muted/index'
import { useRef } from 'react'

const CustomAlert = ({ setShowAlert, optionAction, message, option }: { setShowAlert: any, optionAction: any, message: string, option: string }) => {

    const fadeAnim = useRef(new Animated.Value(1)).current

    const closeModal = () => {

        Animated.timing(
            fadeAnim,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }
        ).start()

        setTimeout(() => {
            setShowAlert(false)
        }, 501)

    }

    const handlePress = () => {
        optionAction()
        closeModal()
    }

    return (
        <Modal
            transparent
            onRequestClose={closeModal}
        >
            <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
                <View style={styles.alert}>
                    <CloseButton onPress={closeModal} />
                    <Text style={styles.text}>{message}</Text>
                    <ButtonMuted onPress={closeModal} title='Cancelar' />
                    <ButtonDanger onPress={handlePress} title={option} />
                </View>
            </Animated.View>
        </Modal>
    )
}

export default CustomAlert