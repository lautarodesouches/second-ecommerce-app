import { StyleSheet } from 'react-native'
import { themeBg, grey } from '../../constants/Colors/index';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeBg,
        padding: 10
    },
    productContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5
    },
    imagesContainer: {
        height: 250,
        flexDirection: 'row'
    },
    mainImageContainer: {
        height: '100%',
        width: '85%',
        padding: 10
    },
    mainImage: {
        flex: 1,
        resizeMode: 'contain'
    },
    thumnailImagesContainer: {
        height: '100%',
        width: '15%'
    },
    thumnailImage: {
        flex: 1,
        maxHeight: '20%',
        resizeMode: 'contain',
        marginVertical: 5,
        borderColor: grey,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center'
    }
})