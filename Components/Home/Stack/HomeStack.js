import React from 'react';
import Home from '../Home';
import { color } from '../../config/colors';
import { fontSize } from '../../config/fontSize';
import NewRoutine from '../Pages/New Routine/NewRoutine';
import { createStackNavigator } from 'react-navigation';
import { Text, Image, TouchableOpacity } from 'react-native';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                headerMode: "none",
                headerStyle: {
                    width: "90%",
                    alignSelf: "center",
                    borderBottomWidth: .75,
                    borderBottomColor: color.HIGHLIGHT,
                    backgroundColor: color.PRIMARY_DARK
                },
                headerLeft: <Text style={[fontSize.PAGE_TITLE, {
                    color: color.WHITE,
                    marginRight: 'auto',
                    alignSelf: 'center',
                }]}>WORKOUTS</Text>,
                headerRight: (
                    <TouchableOpacity style={{
                        width: 30,
                        height: 30,
                        alignSelf: 'center'
                    }} onPress={() => navigation.navigate("NewRoutine")}>
                        <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={require("../../../assets/addWorkout.png")} />
                    </TouchableOpacity>
                )
            })
        },
        NewRoutine: {
            screen: NewRoutine,
            navigationOptions: {
                title: "NEW ROUTINE",
                headerMode: "none",
                headerStyle: {
                    borderBottomWidth: 0,
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