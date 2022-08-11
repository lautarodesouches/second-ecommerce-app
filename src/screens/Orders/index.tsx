import { FlatList, Text, View } from 'react-native'
import { ButtonPrimary, OrderPreview } from '../../components'
import { styles } from './styles';
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from '../../utils/firebaseConfig'
import { useSelector } from 'react-redux'

const OrdersScreen = ({ navigation }: { navigation: any }) => {

    const [orders, setOrders] = useState<any[]>([])

    const email = useSelector((state: any) => state.auth.email)

    useEffect(() => {

        (async () => {
            const q = query(collection(db, "orders"), where('buyer.email', "==", email))

            const querySnapshot = await getDocs(q)

            let result: any[] = []

            querySnapshot.forEach((doc: any) => {
                result.push({ id: doc.id, ...doc.data() })
            })

            setOrders(
                result.sort(
                    (a, b) => {
                        if (a.date.seconds < b.date.seconds) return 1
                        if (a.date.seconds > b.date.seconds) return -1
                        return 0
                    }
                )
            )

        })()

    }, [])

    const ListEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No se encontraron compras recientes</Text>
            <View style={styles.emptyButton}>
                <ButtonPrimary onPress={() => navigation.navigate('Home')} title='Ir al inicio' />
            </View>
        </View>
    )

    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={orders}
            renderItem={({ item }: { item: any }) => <OrderPreview order={item} />}
            ListEmptyComponent={ListEmptyComponent}
        />
    )
}

export default OrdersScreen