import Routine from '../Pages/Routine/Routine';
import Workout from '../Pages/Workout/Workout';
import { createStackNavigator } from 'react-navigation';

const RoutineStack = createStackNavigator(
    {
        Routine: {
            screen: Routine
        },
        Workout: {
            screen: Workout,
            navigationOptions: ({ navigation }) => ({
                gestureEnabled: true,
                gestureResponseDistance: { vertical: 500 }, // default is 135 },
            })
        }
    },
    {
        mode: 'modal',
        headerMode: 'none',
        transparentCard: true,
    }
);

export default RoutineStack;