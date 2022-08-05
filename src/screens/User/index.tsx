import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from './styles'

const UserScreen = () => {

    const { name, email } = useSelector((state: any) => state.auth)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido{name ? ` ${name}!` : '!'}</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Email registrado: {email}</Text>
            </View>
        </View>
    )
}

export default UserScreen