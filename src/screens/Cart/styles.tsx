import { StyleSheet } from 'react-native'
import { themeBg, grey } from '../../constants/Colors/index';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeBg,
    },
    contentContainer: {
        paddingHorizontal: '5%',
        flexGrow: 1,
        justifyContent: 'center'
    },
    itemContainer: {
        borderColor: grey,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    imageContainer: {
        height: 100,
        width: '100%'
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
    infoContainer: {
        marginTop: 10
    },
    placeholder: {
        fontSize: 14,
        color: grey,
        textAlign: 'center',
        fontFamily: 'RobotoLight'
    },
    value: {
        marginTop: 5,
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'RobotoLight'
    },
    total: {
        marginTop: 20,
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'RobotoLight'
    },
    buttonContainer: {
        marginVertical: 10
    },
    deleteTouchable: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'crimson',
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
        zIndex: 99
    },
    deleteText: {
        color: '#fff'
    },
    emptyText: {
        fontSize: 20,
        textAlign: 'center'
    }
})