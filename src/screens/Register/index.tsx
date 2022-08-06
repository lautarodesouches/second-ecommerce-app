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

    const updateForm = (inputName: string, error: string = '') => {
        setForm({ ...form, [inputName]: new Input(form[inputName].value, error) })
    }

    const isEmailOk = () => {

        let isOk = false
        const value = form.email.value
        const input = 'email'

        if (value === '') {

            updateForm(input, 'El campo no puede estar vacio')

        } else if (!REGEX_EMAIL.test(value)) {

            updateForm(input, 'Email invalido')

        } else {

            isOk = true

        }

        return isOk
    }

    const isPasswordOk = () => {

        let isOk = false
        const input = 'password'
        const value = form[input].value
        const messageStart = 'La contraseña debe tener al menos '

        if (value === '') {

            updateForm(input, 'El campo no puede estar vacio')

        } else if (value !== form.password.value) {

            updateForm(input, messageStart + '')

        } else if (!REGEX_EIGHT_CHARACTERS.test(value)) {

            updateForm(input, messageStart + '8 caracteres')

        } else if (!REGEX_ONE_LOWERCASE.test(value)) {

            updateForm(input, messageStart + 'una letra minúscula')

        } else if (!REGEX_ONE_UPPERCASE.test(value)) {

            updateForm(input, messageStart + 'una letra mayúscula')

        } else if (!REGEX_ONE_NUMBER.test(value)) {

            updateForm(input, messageStart + 'un numero')

        } else if (!REGEX_ONE_SPECIAL.test(value)) {

            updateForm(input, messageStart + 'un caracter especial')

        } else {

            isOk = true

        }

        return isOk
    }

    const isRepeatPasswordOk = () => {

        let isOk = false
        const input = 'repeatPassword'
        const value = form[input].value

        if (value === '') {

            updateForm(input, 'El campo no puede estar vacio')

        } else if (value !== form.password.value) {

            updateForm(input, 'Las contraseñas deben coincidir')

        } else {

            isOk = true

        }

        return isOk
    }

    const validateForm = () => {
        if (isEmailOk() && isPasswordOk() && isRepeatPasswordOk()) {
            dispatch(
                auth(false, form.email.value, form.password.value)
            )
        }
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
                <CustomInput
                    label='Repetir contraseña'
                    helpMessage={form.repeatPassword.error}
                    keyboardType='ascii-capable'
                    value={form.repeatPassword.value}
                    secureTextEntry={true}
                    onChangeText={(value: string) => setForm({ ...form, ['repeatPassword']: new Input(value, '') })}
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