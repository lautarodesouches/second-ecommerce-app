import CustomButton from '../Custom'
import { styles } from './styles'

const SecondaryButton = ({ title, onPress }: { title: string, onPress: any }) => {
    return (
        <CustomButton
            title={title}
            buttonStyle={styles.container}
            textStyle={styles.text}
            onPress={onPress}
        />
    )
}

export default SecondaryButton