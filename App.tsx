import AppNavigation from './src/navigation'
import { useFonts } from 'expo-font'

export default function App() {

  const FONTS_FOLDER = './assets/fonts'
  const ROBOTO_FOLDER = FONTS_FOLDER + '/Roboto/Roboto-'
  const MERRIWEATHER_FOLDER = FONTS_FOLDER + '/Merriweather/Merriweather-'

  const [loaded] = useFonts({
    RobotoBold: require(ROBOTO_FOLDER + 'Bold.ttf'),
    RobotoItalic: require(ROBOTO_FOLDER + 'Italic.ttf'),
    RobotoLight: require(ROBOTO_FOLDER + 'Light.ttf'),
    RobotoRegular: require(ROBOTO_FOLDER + 'Regular.ttf'),
    MerriweatherBold: require(MERRIWEATHER_FOLDER + 'Bold.ttf'),
    MerriweatherItalic: require(MERRIWEATHER_FOLDER + 'Italic.ttf'),
    MerriweatherLight: require(MERRIWEATHER_FOLDER + 'Light.ttf'),
    MerriweatherRegular: require(MERRIWEATHER_FOLDER + 'Regular.ttf'),
  })

  if (!loaded) return null

  return (
    <AppNavigation />
  )
}