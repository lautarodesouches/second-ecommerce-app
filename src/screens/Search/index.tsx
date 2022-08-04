import { FlatList, Text, View } from 'react-native'
import { ProductPreview } from '../../components'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import db from '../../utils/firebaseConfig'
import { collection, getDocs, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const SearchScreen = ({ navigation }: { navigation: any }) => {

    const [emptyMessage, setEmptyMessage] = useState<string>('Cargando...')
    const [searchResult, setSearchResult] = useState<any[]>([])

    const searchQuery = useSelector((state: any) => state.search.query.toLowerCase())

    useEffect(() => {
        (async function () {
            const querySnapshot = query(collection(db, 'products'))
            return await getDocs(querySnapshot)
        })()
            .then((result) => {

                if (!result.docs) setEmptyMessage('Hubo un error en la carga de los productos')

                if (result.docs.length < 1) setEmptyMessage('No se encontraron productos en la base de datos')

                const allProducts = result.docs.map(doc => ({ id: doc.id, ...doc.data() }))

                const searchResult = allProducts.filter((product: any) => product.name.toLowerCase().includes(searchQuery) || product.brand.toLowerCase().includes(searchQuery) || product.category.toLowerCase().includes(searchQuery))

                if(searchResult.length < 1) setEmptyMessage('No se encontraron productos que coincidan con tu búsqueda')

                setSearchResult(searchResult)

            })
            .catch(error => {
                console.log(error)
            })
    }, [searchQuery])

    const ListEmptyComponent = () => <Text style={styles.loadingText}>{emptyMessage}</Text>

    return (
        <View style={styles.container}>
            <FlatList
                data={searchResult}
                renderItem={({ item }) => <ProductPreview item={item} navigation={navigation} />}
                numColumns={2}
                style={styles.flatList}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                ListEmptyComponent={ListEmptyComponent}
            />
        </View>
    )
}

export default SearchScreen