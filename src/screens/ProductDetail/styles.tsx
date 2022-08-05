import { StyleSheet } from 'react-native'
import { themeBg, grey, primaryBg } from '../../constants/Colors/index';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scroll: {
        flex: 1,
        backgroundColor: themeBg,
        padding: 10
    },
    productContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        paddingVertical: 25
    },
    nav: {
        flexDirection: 'row'
    },
    navText: {
        fontSize: 16,
        fontFamily: 'RobotoRegular',
        color: primaryBg
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
        textAlign: 'center',
        fontFamily: 'RobotoRegular'
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
        width: '50%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    colorsContainer: {
        marginVertical: 10
    },
    colorsTitle: {
        fontSize: 18,
        textAlign: 'center'
    },
    colorsOptionsContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    buttonsContainer: {
        marginTop: 20,
        width: '80%',
        alignSelf: 'center'
    }
})