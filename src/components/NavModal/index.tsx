import { Modal, Text, TouchableOpacity, View } from 'react-native'
import CustomButton from '../Buttons/Custom'
import { styles } from './styles'

const NavModal = ({ closeModal, navigate }: { closeModal: VoidFunction, navigate: any }) => {

    const NavOption = ({ routeName, title }: { routeName: string, title: string }) => (
        <TouchableOpacity style={styles.option} onPress={() => navigate(routeName)}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )

    return (
        <Modal
            animationType='fade'
            transparent={true}
            onRequestClose={closeModal}
        >
            <View style={styles.container}>
                <TouchableOpacity style={styles.noFeedback} onPress={closeModal} />
                <View style={styles.content}>
                    <View>
                        <NavOption routeName='Home' title='Inicio' />
                        <NavOption routeName='Auth' title='Iniciar sesión' />
                        <NavOption routeName='Auth' title='Registrarse' />
                        <NavOption routeName='Cart' title='Carrito' />
                        <NavOption routeName='Orders' title='Ordenes' />
                    </View>
                    <View style={styles.closeButtonContainer}>
                        <CustomButton onPress={closeModal} title='Cerrar' buttonStyle={styles.closeButton} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default NavModal