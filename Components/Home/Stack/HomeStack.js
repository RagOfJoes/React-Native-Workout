import Home from '../Home';
import { color } from '../../config/colors';
import { fontSize } from '../../config/fontSize';
import NewRoutine from '../Pages/New Routine/NewRoutine';
import { createStackNavigator } from 'react-navigation';

const HomeStack = createStackNavigator(
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
                headerTitleStyle: [
                    {
                        color: color.WHITE
                    },
                    fontSize.CARD_CONTENT
                ]
            }
        }
    },
    {
        // TODO: Change back to home
        initialRouteName: "Home",
    }
);

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    } else {
        tabBarVisible = true;
    }
    return { tabBarVisible };
};

export default HomeStack;