import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    noFeedback: {
        flex: 1,
        backgroundColor: '#00000099'
    },
    content: {
        justifyContent: 'space-between',
        flex: 2,
        padding: '5%',
        backgroundColor: '#fff'
    },
    option: {
        marginVertical: 10
    },
    text: {
        fontSize: 20,
        fontFamily: 'MerriweatherRegular'
    },
    closeButtonContainer: {
        alignItems: 'center'
    },
    closeButton: {
        backgroundColor: '#000'
    },
    closeButtonText: {
        fontSize: 16,
        fontFamily: 'MerriweatherRegular'
    }
})