import { StyleSheet } from 'react-native'
import { themeBg, grey } from '../../constants/Colors/index';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeBg,
        padding: 10,
    },
    productContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        paddingBottom: 150
    },
    nav: {
        flexDirection: 'row'
    },
    navText: {
        fontSize: 16
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
        fontSize: 22,
        marginTop: 20,
        marginBottom: 10,
        textAlign: 'center'
    },
    description: {
        fontSize: 18,
        marginTop: 20
    },
    statsContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    statText: {
        fontSize: 18
    },
    stars: {
        width: '80%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    quantityContainer: {
        marginVertical: 30,
    },
    quantityTouchable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    actualQuantity: {
        textAlign: 'center',
        fontSize: 18,
        marginRight: 5
    },
    amountAvailable: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 17
    },
    selectQuantity: {
        alignSelf: 'center',
        width: '50%',
        borderRadius: 5,
        borderWidth: 1,
        position: 'relative',
        marginTop: 10,
        zIndex: 99
    },
    optionContainer: {
        paddingVertical: 5,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    optionText: {
        fontSize: 18,
        textAlign: 'center'
    },
    inputWarn: {
        marginTop: 15,
        color: 'crimson',
        fontSize: 15,
        textAlign: 'center'
    }
})