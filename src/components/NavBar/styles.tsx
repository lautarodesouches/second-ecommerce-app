import { StyleSheet } from 'react-native'
import { primaryBg, themeBg, themeText } from '../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: themeBg,
        padding: '2.5%'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    brand: {
        fontSize: 20,
        color: themeText,
        alignSelf: 'flex-end',
        fontFamily: 'MerriweatherItalic'
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    icon: {
        marginHorizontal: 10
    },
    searchContainer: {
        marginTop: 15,
        flexDirection: 'row'
    },
    searchInput: {
        width: '85%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderWidth: 1,
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontFamily: 'MerriweatherRegular'
    },
    searchIcon: {
        backgroundColor: primaryBg,
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    cartLengthContainer: {
        backgroundColor: 'red',
        borderRadius: 50,
        paddingHorizontal: 8,
        paddingVertical: 2,
        zIndex: 99,
        position: 'absolute',
        top: -10,
        right: -15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartLengthText: {
        color: 'white'
    }
})