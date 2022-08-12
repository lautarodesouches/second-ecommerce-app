import { FlatList, View } from 'react-native'
import { Loading, ProductPreview } from '../../components'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import db from '../../utils/firebaseConfig'
import { collection, getDocs, limit, orderBy, query, startAt } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { addProducts } from '../../store/product.slice'

const HomeScreen = ({ navigation }: { navigation: any }) => {

    const LIST_LIMIT = 10

    const [lastDocument, setLastDocument] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const products = useSelector((state: any) => state.product.products)

    const dispatch = useDispatch()

    const loadProducts = () => {

        // Limit queries to firebase
        if (lastDocument > 21) return

        (async () => {
            const querySnapshot = query(collection(db, 'products'), orderBy("id"), startAt(lastDocument), limit(LIST_LIMIT))
            return await getDocs(querySnapshot)
        })()
            .then((result) => {

                dispatch(
                    addProducts(
                        result.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                    )
                )
                setLastDocument(lastDocument + LIST_LIMIT)
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        loadProducts()
    }, [error])

    return (
        <Loading loading={loading} error={error} setError={setError} navigate={navigation.navigate} currentScreen='Home'>
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={({ item }) => <ProductPreview item={item} navigation={navigation} />}
                    numColumns={2}
                    style={styles.flatList}
                    contentContainerStyle={styles.contentContainer}
                    onEndReached={loadProducts}
                    onEndReachedThreshold={1.5}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </Loading>
    )
}

export default HomeScreen