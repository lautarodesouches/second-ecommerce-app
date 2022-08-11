import { Text, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { styles } from './styles'
import { ButtonPrimary, CustomInput } from '../../components'
import { REGEX_EMAIL } from '../../validations'
import { Input } from '../../models/Input'
import { useDispatch, useSelector } from 'react-redux'
import { auth, deleteMessage } from '../../store/auth.slice'

const LoginScreen = ({ navigation }: { navigation: any }) => {

    const dispatch: any = useDispatch()

    const authState = useSelector((state: any) => state.auth)

    const [form, setForm] = useState<any>({
        email: new Input,
        password: new Input
    })

    // Translate firebase auth message
    let errorMessage = 'Ha ocurrido un error'
    if (authState.message) {
        switch (authState.message) {
            case 'INVALID_PASSWORD':
                errorMessage = 'Contraseña inválida'
                break
            case 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.':
                errorMessage = 'Demasiados intentos fallidos, el acceso ha sido temporalmente restringido'
                break
            default:
                console.log('Login error message', authState.message)
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

        if (input.isValueEmpty()) {
            error = 'El campo no puede estar vacio'
        }

        input.setError(error)
        updateForm()

        return !error
    }

    const validateForm = () => {

        let valid = true

        if (!isEmailOk()) valid = false
        if (!isPasswordOk()) valid = false

        if (valid) {
            dispatch(
                auth(true, form.email.value, form.password.value)
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

    useEffect(() => {
        form.email.setValue(authState.email)
        updateForm()
    }, [authState])

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Ingresar</Text>
                <CustomInput
                    label='Email'
                    helpMessage={form.email.getError()}
                    keyboardType='email-address'
                    value={form.email.getValue()}
                    secureTextEntry={false}
                    onChangeText={(value: string) => handleChangeText('email', value)}
                    onEndEditing={isEmailOk}
                />
                <CustomInput
                    label='Contraseña'
                    helpMessage={form.password.getError()}
                    keyboardType='ascii-capable'
                    value={form.password.getValue()}
                    secureTextEntry={true}
                    onChangeText={(value: string) => handleChangeText('password', value)}
                    onEndEditing={isPasswordOk}
                />
                <View style={styles.buttonContainer}>
                    <ButtonPrimary onPress={validateForm} title='Ingresar' />
                </View>
                {
                    !!authState.message && <Text style={styles.authMessage}>{errorMessage}</Text>
                }
                <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.touchableText}>No tenés cuenta? Crear cuenta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen