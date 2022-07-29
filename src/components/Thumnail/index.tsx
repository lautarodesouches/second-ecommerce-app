import { Image, TouchableOpacity } from 'react-native'
import { PRODUCT_IMAGE_URL } from '../../constants/Urls'
import { styles } from './styles'
import { primaryBg, grey } from '../../constants/Colors/index'

const Thumnail = ({ productId, imageNumber, handleSelectImage, numberMainImage }: { productId: number, imageNumber: number, handleSelectImage: Function, numberMainImage: number }) => {
    return (
        <TouchableOpacity style={[styles.container, { borderColor: numberMainImage === imageNumber ? primaryBg : '#e1e1e1' }]} onPress={() => handleSelectImage(imageNumber)}>
            <Image source={{ uri: `${PRODUCT_IMAGE_URL}${productId}-${imageNumber}.png` }} style={styles.image} />
        </TouchableOpacity>
    )
}

export default Thumnail