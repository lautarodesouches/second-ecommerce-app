import { FlatList, View } from 'react-native'
import { ProductPreview } from '../../components'
import { styles } from './styles'
import { useSelector } from 'react-redux'

const HomeScreen = ({ navigation }: { navigation: any }) => {

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