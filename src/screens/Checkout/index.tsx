import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonPrimary, CustomInput } from '../../components'
import { Input } from '../../models/Input'
import { updateAuth } from '../../store/auth.slice'
import { styles } from './styles'
import { CartItem } from '../../models/CartItem'
import { collection, doc, getDocs, increment, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import db from '../../utils/firebaseConfig'
import { clearCart } from '../../store/cart.slice'

const CheckoutScreen = ({ navigation }: { navigation: any }) => {

    const dispatch = useDispatch()

    const cart = useSelector((state: any) => state.cart.cart)
    const user = useSelector((state: any) => state.auth)

    const [state, setState] = useState('')

    const [form, setForm] = useState<any>({
        name: new Input(user.name),
        phone: new Input(user.phone),
        address: new Input(user.address),
        cc: new Input,
        exp: new Input,
        sCode: new Input
    })

    const updateForm = () => setForm({ ...form })

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
            if (!validateNotEmpty(input)) valid = false
        }
        if (valid) {

            dispatch(
                updateAuth({
                    name: form.name.getValue(),
                    phone: form.phone.getValue(),
                    address: form.address.getValue(),
                    creditCard: form.cc.getValue()
                })
            )

            createOrder()

        }
    }

    const createOrder = () => {

        setState('Procesando pedido.')

        // Set order
        let order = {
            buyer: {
                name: form.name.getValue(),
                email: user.email,
                phone: form.phone.getValue()
            },
            total: cart.reduce((acc: number, item: CartItem) => acc + item.subtotal, 0),
            items: cart.map(
                (item: CartItem) => ({
                    id: item.id,
                    name: item.name,
                    brand: item.brand,
                    price: item.price,
                    qty: item.quantity,
                    color: item.color,
                })
            ),
            date: serverTimestamp()
        }

        // Update stock
        cart.forEach(async (item: CartItem) => {
            // Get item doc by id
            let docId: string = ''
            const querySnapshot = query(collection(db, "products"), where("id", "==", item.id))
            await getDocs(querySnapshot).then(res => docId = res.docs[0].id)
            // Update
            const itemRef = doc(db, "products", docId)
            await updateDoc(itemRef, { amountAvailable: increment(- item.quantity) })
        });

        // Create new order in firebase
        (async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order)
            return newOrderRef
        })()
            .then(result => {
                setState('')
                dispatch(clearCart())
                navigation.navigate('Thankyou', { orderId: result.id })
            })
            .catch(error => {
                setState('Ha ocurrido un error :/')
            })

    }

    return (

        <ScrollView contentContainerStyle={[styles.container, {justifyContent: state ? 'center' : 'space-between'}]}>
            {
                state
                    ?
                    <Text style={styles.state}>{state}</Text>
                    :
                    <>
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
                                label='Teléfono'
                                helpMessage={form.phone.getError()}
                                onChangeText={(value: string) => handleChangeText('phone', value)}
                                value={form.phone.getValue()}
                                keyboardType='default'
                                secureTextEntry={false}
                                onEndEditing={() => validateNotEmpty('phone')}
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
                    </>
            }
        </ScrollView>

    )
}

export default CheckoutScreen