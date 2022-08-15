import { ReactChild } from 'react'
import { Text, View } from 'react-native'
import ButtonPrimary from '../Buttons/Primary'
import { styles } from './styles'

const Loading = ({ children, loading, error, setError, navigate, currentScreen }: { children: ReactChild, loading: boolean, error: string, setError: Function, navigate: Function, currentScreen: string }) => { 

    let token = Math.random() * 100

    const handleReload = () => {
        setError('')
        navigate(currentScreen, { token })
    }    

    return (
        <>
            {
                loading
                    ?
                    <View style={styles.container}>
                        <Text style={styles.loadingText}>Cargando...</Text>
                    </View>
                    :
                    (
                        !!error
                            ?
                            <View style={styles.container}>
                                <Text style={styles.errorText}>{error}</Text>
                                <ButtonPrimary onPress={handleReload} title='Intentar nuevamente' />
                            </View>
                            :
                            children
                    )
            }
        </>
    )
}

export default Loading