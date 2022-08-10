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

    const updateForm = () => setForm({...form})

    const handleChangeText = (inputName: string, value: string) => {
        form[inputName].setValue(value)
        form[inputName].setError('')
        updateForm()
    }

    const validateNotEmpty = (input: string) => {
        if (form[input].isValueEmpty()) {
            form[input].setError('No puede estar vacio')
            updateForm()
            return false
        }
        return true
    }

    const validateForm = () => {
        let valid = true
        for (const input in form) {
            if(!validateNotEmpty(input)) valid = false
        }
        if(valid) navigation.navigate('Thankyou')
    }

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formGroup}>
                <CustomInput
                    label='Nombre'
                    helpMessage={form.name.getError()}
                    onChangeText={(value: string) => handleChangeText('name', value)}
                    value={form.name.getValue()}
                    keyboardType='default'
                    secureTextEntry={false}
                    onEndEditing={() => validateNotEmpty('name')}
                />
            </View>
            <View style={styles.formGroup}>
                <CustomInput
                    label='Dirección'
                    helpMessage={form.address.getError()}
                    onChangeText={(value: string) => handleChangeText('address', value)}
                    value={form.address.getValue()}
                    keyboardType='default'
                    secureTextEntry={false}
                    onEndEditing={() => validateNotEmpty('address')}
                />
            </View>
            <View style={styles.formGroup}>
                <CustomInput
                    label='Tarjeta'
                    helpMessage={form.cc.getError()}
                    onChangeText={(value: string) => handleChangeText('cc', value)}
                    value={form.cc.getValue()}
                    keyboardType='number-pad'
                    secureTextEntry={false}
                    onEndEditing={() => validateNotEmpty('cc')}
                />
                <View style={styles.row}>
                    <View style={[styles.col, { marginRight: 10 }]}>
                        <CustomInput
                            label='Vencimiento'
                            helpMessage={form.exp.getError()}
                            onChangeText={(value: string) => handleChangeText('exp', value)}
                            value={form.exp.getValue()}
                            keyboardType='number-pad'
                            secureTextEntry={false}
                            onEndEditing={() => validateNotEmpty('exp')}
                        />
                    </View>
                    <View style={[styles.col, { marginLeft: 10 }]}>
                        <CustomInput
                            label='Codigo'
                            helpMessage={form.sCode.getError()}
                            onChangeText={(value: string) => handleChangeText('sCode', value)}
                            value={form.sCode.getValue()}
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