import CustomButton from '../Custom'
import { styles } from './styles'

const ButtonSecondary = ({ title, onPress }: { title: string, onPress: VoidFunction }) => {
    return (
        <CustomButton
            title={title}
            buttonStyle={styles.container}
            textStyle={styles.text}
            onPress={onPress}
        />
    )
}

export default ButtonSecondary