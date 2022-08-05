import { FlatList, Text, View } from 'react-native'
import { ProductPreview } from '../../components'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import db from '../../utils/firebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { setProducts } from '../../store/product.slice'

const HomeScreen = ({ navigation }: { navigation: any }) => {

    const [emptyMessage, setEmptyMessage] = useState('Cargando...')

    const products = useSelector((state: any) => state.product.products)

    const dispatch = useDispatch()

    useEffect(() => {
        (async function () {
            const querySnapshot = query(collection(db, 'products'))
            return await getDocs(querySnapshot)
        })()
            .then((result) => {

                if (!result.docs) setEmptyMessage('Hubo un error en la carga de los productos')

                if (result.docs.length < 1) setEmptyMessage('No se encontraron productos')

                dispatch(
                    setProducts(
                        result.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                    )
                )

            })
            .catch(error => {
                console.log(error)
            })
    }, [products.length < 1])

    const ListEmptyComponent = () => <Text style={styles.loadingText}>{emptyMessage}</Text>

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductPreview item={item} navigation={navigation} />}
                numColumns={2}
                style={styles.flatList}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                ListEmptyComponent={ListEmptyComponent}
            />
        </View>
    )
}

export default HomeScreen