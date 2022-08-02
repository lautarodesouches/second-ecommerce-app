import { StyleSheet } from 'react-native'
import { primaryBg, themeBg, themeText, secondaryBg } from '../../constants/Colors/index';

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
        alignSelf: 'flex-end'
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
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modalNoFeedback: {
        height: '50%'
    },
    modalContent: {
        height: '50%',
        padding: '5%',
        backgroundColor: secondaryBg
    }
})