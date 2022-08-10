import { Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { styles } from './styles'
import { ButtonPrimary, CustomInput } from '../../components'
import { REGEX_EMAIL, REGEX_EIGHT_CHARACTERS, REGEX_ONE_UPPERCASE, REGEX_ONE_LOWERCASE, REGEX_ONE_NUMBER, REGEX_ONE_SPECIAL } from '../../validations'
import { Input } from '../../models/Input'
import { useDispatch, useSelector } from 'react-redux'
import { auth, deleteMessage } from '../../store/auth.slice'

const RegisterScreen = () => {

    const dispatch: any = useDispatch()

    const authState = useSelector((state: any) => state.auth)

    const [form, setForm] = useState<any>({
        email: new Input,
        password: new Input,
        repeatPassword: new Input
    })

    // Translate firebase auth message
    let errorMessage = 'Ha ocurrido un error'
    if (authState.message) {
        switch (authState.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'El email ya está registrado'
                break
            default:
                console.log('Register error message', authState.message)
                break
        }
    }

    const updateForm = () => setForm({ ...form })

    const isEmailOk = () => {

        const input = form.email
        let error = ''

        if (input.isValueEmpty()) {
            error = 'El campo no puede estar vacio'
        } else if (!input.testValue(REGEX_EMAIL)) {
            error = 'Email invalido'
        }

        input.setError(error)
        updateForm()

        return !error
    }

    const isPasswordOk = () => {

        const input = form.password
        let error = ''
        const messageStart = 'La contraseña debe tener al menos '

        if (input.isValueEmpty()) {
            error = 'El campo no puede estar vacio'
        } else if (!input.testValue(REGEX_EIGHT_CHARACTERS)) {
            error = messageStart + '8 caracteres'
        } else if (!input.testValue(REGEX_ONE_LOWERCASE)) {
            error = messageStart + 'una letra minúscula'
        } else if (!input.testValue(REGEX_ONE_UPPERCASE)) {
            error = messageStart + 'una letra mayúscula'
        } else if (!input.testValue(REGEX_ONE_NUMBER)) {
            error = messageStart + 'un numero'
        } else if (!input.testValue(REGEX_ONE_SPECIAL)) {
            error = messageStart + 'un caracter especial'
        }

        input.setError(error)
        updateForm()

        return !error
    }

    const isRepeatPasswordOk = () => {

        const input = form.repeatPassword
        let error = ''

        if (input.isValueEmpty()) {
            error = 'El campo no puede estar vacio'
        } else if (input.value !== form.password.value) {
            error = 'Las contraseñas deben coincidir'
        }

        input.setError(error)
        updateForm()

        return !error
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

    useEffect(() => {
        dispatch(
            deleteMessage()
        )
    }, [])

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
                    !!authState.message && <Text style={styles.authMessage}>{errorMessage}</Text>
                }
            </View>
        </View>
    )
}

export default RegisterScreen