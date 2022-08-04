import { Modal, Text, View } from 'react-native'
import CloseButton from '../Buttons/Close'
import ButtonDanger from '../Buttons/Danger'
import { styles } from './styles'
import ButtonMuted from '../Buttons/Muted/index'

const CustomAlert = ({ setShowAlert, optionAction, message, option }: { setShowAlert: any, optionAction: any, message: string, option: string }) => {

    const closeModal = () => setShowAlert(false)

    const handlePress = () => {
        optionAction()
        closeModal()
    }

    return (
        <Modal
            transparent
            onRequestClose={closeModal}
        >
            <View style={styles.container}>
                <View style={styles.alert}>
                    <CloseButton onPress={closeModal} />
                    <Text style={styles.text}>{message}</Text>
                    <ButtonMuted onPress={closeModal} title='Cancelar' />
                    <ButtonDanger onPress={handlePress} title={option} />
                </View>
            </View>
        </Modal>
    )
}

export default CustomAlert