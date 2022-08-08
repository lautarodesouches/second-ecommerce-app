import { Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { styles } from './styles'
import { ButtonPrimary, CustomInput } from '../../components'
import { REGEX_EMAIL } from '../../validations'
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

    const updateForm = () => setForm({ ...form })

    useEffect(() => {
        form.email.setValue(authState.email)
        updateForm()
    }, [authState])

    const isEmailOk = () => {

        const input = form.email

        if (input.value === '') {
            input.setError('El campo no puede estar vacio')
        } else if (!REGEX_EMAIL.test(input.value)) {
            input.setError('Email invalido')
        } else {
            input.setError('')
            return true
        }

        updateForm()

        return false
    }

    const isPasswordOk = () => {

        const input = form.password

        if (input.value === '') {
            input.setError('El campo no puede estar vacio')
            return false
        }

        updateForm()

        input.setError('')
        return true
    }

    const validateForm = () => {
        if (isEmailOk() && isPasswordOk()) {
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