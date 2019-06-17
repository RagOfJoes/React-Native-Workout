import Home from '../Home';
import { color } from '../../config/colors';
import { fontSize } from '../../config/fontSize';
import NewRoutine from '../New Routine/NewRoutine';
import { createStackNavigator } from 'react-navigation';

export const HomeStackNav = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                headerStyle: {
                    display: "none"
                }
            }
        },
        NewRoutine: {
            screen: NewRoutine,
            navigationOptions: {
                title: "NEW ROUTINE",
                headerStyle: {
                    backgroundColor: color.SECONDARY_DARK
                },
                headerTintColor: color.WHITE,
                headerTitleStyle: [{
                    color: color.WHITE
                }, fontSize.CARD_CONTENT]
            }
        }
    },
    {
        initialRouteName: "Home",
    }
)