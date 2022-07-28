import { FlatList, View } from 'react-native'
import { ProductPreview } from '../../components'
import { products } from '../../utils/products'
import { styles } from './styles'

const HomeScreen = ({ navigation }: { navigation: any }) => {

    const handleProductSelect = (item: object) => navigation.navigate('Detail', { item })

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductPreview item={item} onPress={() => handleProductSelect(item)} />}
                numColumns={2}
                style={styles.flatList}
            />
        </View>
    )
}

export default HomeScreen