import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { primaryText, themeText } from '../../constants/Colors/index'
import { useState } from 'react'
import NavModal from '../NavModal'
import { useDispatch, useSelector } from 'react-redux'
import { setGlobalQuery } from '../../store/search.slice'

const NavBar = ({ navigation }: { navigation: any }) => {

    const dispatch = useDispatch()

    const userId = useSelector((state: any) => state.auth.userId)

    const globalQuery = useSelector((state: any) => state.search.query)
    const cartLength = useSelector((state: any) => state.cart.cart.length)

    const [showModal, setShowModal] = useState(false)
    const [localQuery, setLocalQuery] = useState(globalQuery)

    const navigate = (screen: string) => navigation.navigate(screen)

    const closeModal = () => setShowModal(false)

    const saveAndNavigate = () => {
        dispatch(setGlobalQuery(localQuery))
        navigate('Search')
    }

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
                        {
                            userId && (
                                <TouchableOpacity style={styles.icon} onPress={() => navigate('User')}>
                                    <Ionicons name='person-outline' size={24} color={themeText} />
                                </TouchableOpacity>
                            )
                        }
                        <TouchableOpacity style={styles.icon} onPress={() => navigate('Cart')}>
                            <Ionicons name='cart-outline' size={24} color={themeText} />
                            {
                                cartLength > 0 && (
                                    <View style={styles.cartLengthContainer}>
                                        <Text style={styles.cartLengthText}>{cartLength}</Text>
                                    </View>
                                )
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.icon} onPress={() => setShowModal(!showModal)}>
                            <Ionicons name='menu-sharp' size={24} color={themeText} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <TextInput
                        onChangeText={(e: string) => setLocalQuery(e)}
                        onEndEditing={saveAndNavigate}
                        placeholder='Buscar'
                        style={styles.searchInput}
                        value={localQuery}
                    />
                    <TouchableOpacity style={styles.searchIcon} onPress={saveAndNavigate}>
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