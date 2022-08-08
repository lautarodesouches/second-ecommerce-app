import { Text, View } from 'react-native'
import { useState } from 'react'
import { styles } from './styles'
import { ButtonPrimary, CustomInput } from '../../components'
import { REGEX_EMAIL, REGEX_EIGHT_CHARACTERS, REGEX_ONE_UPPERCASE, REGEX_ONE_LOWERCASE, REGEX_ONE_NUMBER, REGEX_ONE_SPECIAL } from '../../validations'
import { Input } from '../../models/Input'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../store/auth.slice'

const RegisterScreen = () => {

    const dispatch: any = useDispatch()

    const authState = useSelector((state: any) => state.auth)

    const [form, setForm] = useState<any>({
        email: new Input,
        password: new Input,
        repeatPassword: new Input
    })

    const updateForm = () => setForm({ ...form })

    const isEmailOk = () => {

        const input = form.email

        if (input.value === '') {
            input.setError('El campo no puede estar vacio')
        } else if (!REGEX_EMAIL.test(input.value)) {
            input.setError('Email invalido')
        } else {
            return true
        }

        updateForm()

        return false
    }

    const isPasswordOk = () => {

        const input = form.password
        const messageStart = 'La contraseña debe tener al menos '

        if (input.value === '') {
            input.setError('El campo no puede estar vacio')
        } else if (!REGEX_EIGHT_CHARACTERS.test(input.value)) {
            input.setError(messageStart + '8 caracteres')
        } else if (!REGEX_ONE_LOWERCASE.test(input.value)) {
            input.setError(messageStart + 'una letra minúscula')
        } else if (!REGEX_ONE_UPPERCASE.test(input.value)) {
            input.setError(messageStart + 'una letra mayúscula')
        } else if (!REGEX_ONE_NUMBER.test(input.value)) {
            input.setError(messageStart + 'un numero')
        } else if (!REGEX_ONE_SPECIAL.test(input.value)) {
            input.setError(messageStart + 'un caracter especial')
        } else {
            return true
        }

        updateForm()

        return false
    }

    const isRepeatPasswordOk = () => {

        const input = form.repeatPassword

        if (input.value === '') {
            input.setError('El campo no puede estar vacio')
        } else if (input.value !== form.password.value) {
            input.setError('Las contraseñas deben coincidir')
        } else {
            return true
        }

        updateForm()

        return false
    }

    const validateForm = () => {
        if (isEmailOk() && isPasswordOk() && isRepeatPasswordOk()) {
            dispatch(
                auth(false, form.email.value, form.password.value)
            )
        }
    }

    const handleChangeText = (input: string, value: string) => {
        form[input].setValue(value)
        form[input].setError('')
        updateForm()
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Registro</Text>
                <CustomInput
                    label='Email'
                    helpMessage={form.email.error}
                    keyboardType='email-address'
                    value={form.email.value}
                    secureTextEntry={false}
                    onChangeText={(value: string) => handleChangeText('email', value)}
                    onEndEditing={isEmailOk}
                />
                <CustomInput
                    label='Contraseña'
                    helpMessage={form.password.error}
                    keyboardType='ascii-capable'
                    value={form.password.value}
                    secureTextEntry={true}
                    onChangeText={(value: string) => handleChangeText('password', value)}
                    onEndEditing={isPasswordOk}
                />
                <CustomInput
                    label='Repetir contraseña'
                    helpMessage={form.repeatPassword.error}
                    keyboardType='ascii-capable'
                    value={form.repeatPassword.value}
                    secureTextEntry={true}
                    onChangeText={(value: string) => handleChangeText('repeatPassword', value)}
                    onEndEditing={isRepeatPasswordOk}
                />
                <View style={styles.buttonContainer}>
                    <ButtonPrimary onPress={validateForm} title='Registrarme' />
                </View>
                {
                    !!authState.message && <Text style={styles.authMessage}>{authState.message}</Text>
                }
            </View>
        </View>
    )
}

export default RegisterScreen