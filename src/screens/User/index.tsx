import { Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonOutlineDanger, ButtonPrimary } from '../../components'
import { logout } from '../../store/auth.slice'
import { styles } from './styles'

const UserScreen = ({ navigation }: { navigation: any }) => {

    const dispatch = useDispatch()

    const { name, email } = useSelector((state: any) => state.auth)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido{name ? ` ${name}!` : '!'}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Email registrado: {email}</Text>
            </View>
            <ButtonOutlineDanger onPress={() => dispatch(logout())} title='Cerrar sesión' />
            <ButtonPrimary onPress={() => navigation.navigate('Home')} title='Ir al inicio' />
        </View>
    )
}

export default UserScreen