import { Text, View } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'
import { ButtonPrimary, CustomInput } from '../../components'
import { EMAIL_REGEX } from '../../validations'
import { Input } from '../../models/Input'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../store/auth.slice'

const LoginScreen = () => {

    const dispatch: any = useDispatch()

    const authState = useSelector((state: any) => state.auth)

    const [form, setForm] = useState<any>({
        email: new Input,
        password: new Input
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
        if (isEmailOk() && isPasswordOk()) {
            dispatch(
                auth(true, form.email.value, form.password.value)
            )
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
                {
                    !!authState.message && <Text style={styles.authMessage}>{authState.message}</Text>
                }
            </View>
        </View>
    )
}

export default LoginScreen