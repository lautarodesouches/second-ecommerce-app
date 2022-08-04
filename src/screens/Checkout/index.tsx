import { View } from 'react-native'
import { ButtonPrimary, CustomInput } from '../../components'
import { styles } from './styles'

const CheckoutScreen = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <CustomInput
                    label='Dirección'
                    helpMessage=''
                    onChangeText={(e: string) => { }}
                    value={''}
                    keyboardType='default'
                />
            </View>
            <ButtonPrimary onPress={() => { }} title='Siguiente' />
        </View>
    )
}

export default CheckoutScreen