import { FlatList, Text, View } from 'react-native'
import { ProductPreview } from '../../components'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import db from '../../utils/firebaseConfig'
import { collection, getDocs, limit, orderBy, query, startAt } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { addProducts, setProducts } from '../../store/product.slice'

const HomeScreen = ({ navigation }: { navigation: any }) => {

    const LIST_LIMIT = 10

    const [lastDocument, setLastDocument] = useState(1)
    const [emptyMessage, setEmptyMessage] = useState('Cargando...')

    const products = useSelector((state: any) => state.product.products)

    const dispatch = useDispatch()

    const loadProducts = (firtsLoad: boolean) => {

        // Limit queries to firebase
        if (lastDocument > 21) return

        (async () => {
            const querySnapshot = query(collection(db, 'products'), orderBy("id"), startAt(lastDocument), limit(LIST_LIMIT))
            return await getDocs(querySnapshot)
        })()
            .then((result) => {

                if (result.docs.length < 1) setEmptyMessage('Hubo un error en la carga de los productos')

                dispatch(
                    firtsLoad
                        ?
                        setProducts(
                            result.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                        )
                        :
                        addProducts(
                            result.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                        )
                )

            })
            .catch(error => console.log(error))
            .finally(() => setLastDocument(lastDocument + LIST_LIMIT))
    }

    useEffect(() => {
        loadProducts(true)
    }, [])

    const ListEmptyComponent = () => <Text style={styles.loadingText}>{emptyMessage}</Text>

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductPreview item={item} navigation={navigation} />}
                numColumns={2}
                style={styles.flatList}
                contentContainerStyle={styles.contentContainer}
                ListEmptyComponent={ListEmptyComponent}
                onEndReached={() => loadProducts(false)}
                onEndReachedThreshold={1.5}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default HomeScreen