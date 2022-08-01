import { Text, View } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'
import { ButtonPrimary, CustomInput } from '../../components'
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../validations'
import { Input } from '../../models/Input'

const AuthScreen = () => {

    const [isLogin, setIsLogin] = useState(true)

    const [form, setForm] = useState({
        email: new Input,
        password: new Input,
        isFormValid: false
    })

    const updateForm = (inputName: string, value: string = '', error: string = '') => {
        setForm({ ...form, [inputName]: new Input(value, error) })
    }

    const isEmailOk = () => {
        if (!EMAIL_REGEX.test(form.email.value)) {
            updateForm('email', form.email.value, 'Email invalido')
            return false
        }
        return true
    }

    const isPasswordOk = () => {
        if (!PASSWORD_REGEX.test(form.password.value)) {
            updateForm('password', form.password.value, 'Contraseña invalida')
            return false
        }
        return true
    }


    const validateForm = () => {
        setForm({ ...form, ['isFormValid']: false })
        if (isEmailOk() && isPasswordOk()) {
            setForm({ ...form, ['isFormValid']: true })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Title</Text>
                <CustomInput
                    label='Email'
                    helpMessage={form.email.error}
                    keyboardType='default'
                    value={form.email.value}
                    onChangeText={(value: string) => setForm({ ...form, ['email']: new Input(value, '') })}
                    onEndEditing={isEmailOk}
                />
                <CustomInput
                    label='Password'
                    helpMessage={form.password.error}
                    keyboardType='default'
                    value={form.password.value}
                    onChangeText={(value: string) => setForm({ ...form, ['password']: new Input(value, '') })}
                    onEndEditing={isPasswordOk}
                />
                <View>
                    <ButtonPrimary onPress={validateForm} title='Validar' />
                </View>
                {
                    form.isFormValid && <Text>Form Ok</Text>
                }
            </View>
        </View>
    )
}

export default AuthScreen