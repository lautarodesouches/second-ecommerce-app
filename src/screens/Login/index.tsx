import { Text, View } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'
import { ButtonPrimary, CustomInput } from '../../components'
import { EMAIL_REGEX } from '../../validations'
import { Input } from '../../models/Input'

const LoginScreen = () => {

    const [form, setForm] = useState<any>({
        email: new Input,
        password: new Input,
        isFormValid: false
    })

    const updateForm = (inputName: string, error: string = '') => {
        setForm({ ...form, [inputName]: new Input(form[inputName].value, error) })
    }

    const isEmailOk = () => {
        let isOk = false
        if (form.email.value === '') {
            updateForm('email', 'El campo no puede estar vacio')
        } else if (!EMAIL_REGEX.test(form.email.value)) {
            updateForm('email', 'Email invalido')
        } else {
            isOk = true
        }
        return isOk
    }

    const isPasswordOk = () => {
        if (form.password.value === '') {
            updateForm('password', 'El campo no puede estar vacio')
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
                <Text style={styles.title}>Ingresar</Text>
                <CustomInput
                    label='Email'
                    helpMessage={form.email.error}
                    keyboardType='email-address'
                    value={form.email.value}
                    secureTextEntry={false}
                    onChangeText={(value: string) => setForm({ ...form, ['email']: new Input(value, '') })}
                    onEndEditing={isEmailOk}
                />
                <CustomInput
                    label='Contraseña'
                    helpMessage={form.password.error}
                    keyboardType='ascii-capable'
                    value={form.password.value}
                    secureTextEntry={true}
                    onChangeText={(value: string) => setForm({ ...form, ['password']: new Input(value, '') })}
                    onEndEditing={isPasswordOk}
                />
                <View style={styles.buttonContainer}>
                    <ButtonPrimary onPress={validateForm} title='Ingresar' />
                </View>
            </View>
        </View>
    )
}

export default LoginScreen