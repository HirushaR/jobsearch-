import { createStackNavigator,createAppContainer } from '@react-navigation/native';
import Startupscreen from '../screen/startupScreen'

const MainNavigator = createStackNavigator({
    Startupscreen:Startupscreen
})

export default createAppContainer(MainNavigator)