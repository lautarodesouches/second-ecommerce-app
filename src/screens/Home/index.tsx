import { FlatList, View } from 'react-native'
import { ProductPreview } from '../../components'
import { products } from '../../utils/products'
import { styles } from './styles'

const HomeScreen = ({ navigation }: { navigation: any }) => {
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