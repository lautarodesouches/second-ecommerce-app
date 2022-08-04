import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { primaryText, themeText } from '../../constants/Colors/index'
import { useState } from 'react'
import NavModal from '../NavModal'

const NavBar = ({ navigation }: { navigation: any }) => {

    const [showModal, setShowModal] = useState(false)

    const navigate = (screen: string) => navigation.navigate(screen)

    const closeModal = () => setShowModal(false)

    return (
        <>
            <View style={styles.container}>
                <View style={styles.top}>
                    <View>
                        <TouchableOpacity onPress={() => navigate('Home')}>
                            <Text style={styles.brand}>Ecommerce</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.iconsContainer}>
                        <TouchableOpacity style={styles.icon} onPress={() => navigate('Auth')}>
                            <Ionicons name='person-outline' size={24} color={themeText} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon} onPress={() => navigate('Cart')}>
                            <Ionicons name='cart-outline' size={24} color={themeText} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon} onPress={() => setShowModal(!showModal)}>
                            <Ionicons name='menu-sharp' size={24} color={themeText} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <TextInput
                        onChangeText={(e: string) => { }}
                        onEndEditing={() => { }}
                        placeholder='Buscar'
                        style={styles.searchInput}
                        value=''
                    />
                    <TouchableOpacity style={styles.searchIcon}>
                        <Ionicons name='search' size={20} color={primaryText} />
                    </TouchableOpacity>
                </View>
            </View>
            {
                showModal && <NavModal closeModal={closeModal} navigate={navigate} />
            }
        </>
    )
}

export default NavBar