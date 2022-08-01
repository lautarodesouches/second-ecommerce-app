import { FlatList, Text, View } from 'react-native'
import { ProductPreview } from '../../components';
import { products } from '../../utils/products';
import { styles } from './styles';
import ButtonSecondary from '../../components/Buttons/Secondary/index';

const ThankyouScreen = ({ navigation }: { navigation: any }) => {

    const recommended = [
        products[1],
        products[11],
    ]

    const RenderItem = ({ item }: { item: any }) => <ProductPreview item={item} navigation={navigation} />

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>Gracias por tu compra!</Text>
                <Text style={styles.subTitle}>Tu ID de compra es 543543534</Text>
                <ButtonSecondary title='Ver compra' onPress={() => { }} />
            </View>
            <View style={styles.recommendedContainer}>
                <Text style={styles.recommendedTitle}>Te puede interesar:</Text>
                <FlatList
                    data={recommended}
                    renderItem={RenderItem}
                    numColumns={2}
                />
            </View>
        </View>
    )
}

export default ThankyouScreen