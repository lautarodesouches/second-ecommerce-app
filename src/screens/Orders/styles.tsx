import { StyleSheet } from 'react-native'
import { themeBg } from '../../constants/Colors/index'

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: '2.5%',
        backgroundColor: themeBg
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    emptyText: {
        fontSize: 20,
        textAlign: 'center'
    },
    emptyButton: {
        alignSelf: 'center',
        marginTop: 10
    }
})