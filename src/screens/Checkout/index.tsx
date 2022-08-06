import { useState } from 'react';
import { View, ScrollView } from 'react-native'
import { ButtonPrimary, CustomInput } from '../../components'
import { Input } from '../../models/Input'
import { styles } from './styles'

const CheckoutScreen = ({ navigation }: { navigation: any }) => {

    const [form, setForm] = useState<any>({
        name: new Input,
        address: new Input,
        cc: new Input,
        exp: new Input,
        sCode: new Input
    })

    const updateForm = (inputName: string, error: string = '') => {
        setForm({ ...form, [inputName]: new Input(form[inputName].value, error) })
    }

    const validateNotEmpty = (input: string) => {
        let isEmpty = form[input].value === ''
        if (isEmpty) updateForm(input, 'No puede estar vacio')
        return !isEmpty
    }

    const validateForm = () => {
        if (validateNotEmpty('name') && validateNotEmpty('address') && validateNotEmpty('cc') && validateNotEmpty('exp') && validateNotEmpty('sCode')) {
            navigation.navigate('Thankyou')
        }
    }

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formGroup}>
                <CustomInput
                    label='Nombre'
                    helpMessage={form['name'].error}
                    onChangeText={(value: string) => setForm({ ...form, ['name']: new Input(value, '') })}
                    value={form['name'].value}
                    keyboardType='default'
                    secureTextEntry={false}
                    onEndEditing={() => validateNotEmpty('name')}
                />
            </View>
            <View style={styles.formGroup}>
                <CustomInput
                    label='Dirección'
                    helpMessage={form['address'].error}
                    onChangeText={(value: string) => setForm({ ...form, ['address']: new Input(value, '') })}
                    value={form['address'].value}
                    keyboardType='default'
                    secureTextEntry={false}
                    onEndEditing={() => validateNotEmpty('address')}
                />
            </View>
            <View style={styles.formGroup}>
                <CustomInput
                    label='Tarjeta'
                    helpMessage={form['cc'].error}
                    onChangeText={(value: string) => setForm({ ...form, ['cc']: new Input(value, '') })}
                    value={form['cc'].value}
                    keyboardType='number-pad'
                    secureTextEntry={false}
                    onEndEditing={() => validateNotEmpty('cc')}
                />
                <View style={styles.row}>
                    <View style={[styles.col, { marginRight: 10 }]}>
                        <CustomInput
                            label='Vencimiento'
                            helpMessage={form['exp'].error}
                            onChangeText={(value: string) => setForm({ ...form, ['exp']: new Input(value, '') })}
                            value={form['exp'].value}
                            keyboardType='number-pad'
                            secureTextEntry={false}
                            onEndEditing={() => validateNotEmpty('exp')}
                        />
                    </View>
                    <View style={[styles.col, { marginLeft: 10 }]}>
                        <CustomInput
                            label='Codigo'
                            helpMessage={form['sCode'].error}
                            onChangeText={(value: string) => setForm({ ...form, ['sCode']: new Input(value, '') })}
                            value={form['sCode'].value}
                            keyboardType='number-pad'
                            secureTextEntry={true}
                            onEndEditing={() => validateNotEmpty('sCode')}
                        />
                    </View>
                </View>
            </View>
            <ButtonPrimary onPress={validateForm} title='Siguiente' />
        </ScrollView>

    )
}

export default CheckoutScreen