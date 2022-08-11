import { FlatList, Text, View } from 'react-native'
import { ProductPreview } from '../../components'
import { products } from '../../utils/products'
import { styles } from './styles'
import ButtonSecondary from '../../components/Buttons/Secondary/index'

const ThankyouScreen = ({ navigation, route }: { navigation: any, route: any }) => {

    const { orderId } = route.params

    const recommended = [
        products[Math.floor(Math.random() * 19)],
        products[Math.floor(Math.random() * 19)],
    ]

    const RenderItem = ({ item }: { item: any }) => <ProductPreview item={item} navigation={navigation} />

    const ListHeaderComponent = () => (
        <>
            <View style={styles.info}>
                <Text style={styles.title}>Gracias por tu compra!</Text>
                <Text style={styles.subTitle}>Tu ID de compra es {orderId}</Text>
                <ButtonSecondary title='Ver compras' onPress={() => navigation.navigate('Orders')} />
            </View>
            <Text style={styles.recommendedTitle}>Te puede interesar:</Text>
        </>
    )

    return (
        <FlatList
            contentContainerStyle={styles.container}
            ListHeaderComponent={ListHeaderComponent}
            data={recommended}
            renderItem={RenderItem}
            numColumns={2}
        />
    )
}

export default ThankyouScreen