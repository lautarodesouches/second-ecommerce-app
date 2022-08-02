import { FlatList, View } from 'react-native'
import { ProductPreview } from '../../components'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import db from '../../utils/firebaseConfig'
import { collection, getDocs, query } from "firebase/firestore"
import { useEffect } from 'react'

const HomeScreen = ({ navigation }: { navigation: any }) => {

    useEffect(() => {
        (async function () {
            const querySnapshot = query(collection(db, "products"))
            return await getDocs(querySnapshot);
        })()
            .then((result) => {

                if (!result.docs) throw new TypeError("Hubo un error por favor intente mas tarde");

                console.log(
                    result.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                )

            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const products = useSelector((state: any) => state.product.products)

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductPreview item={item} navigation={navigation} />}
                numColumns={2}
                style={styles.flatList}
            />
        </View>
    )
}

export default HomeScreen