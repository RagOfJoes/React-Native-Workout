import React from 'react';
import Home from '../Home';
import { color } from '../../config/colors';
import { fontSize } from '../../config/fontSize';
import NewRoutine from '../Pages/New Routine/NewRoutine';
import { createStackNavigator } from 'react-navigation';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                headerMode: "none",
                headerStyle: {
                    elevation: 0,
                    width: "100%",
                    borderBottomWidth: 0,
                    backgroundColor: color.PRIMARY_DARK
                },
                headerTitle: (
                    <View style={{ flex: 1, width: "100%", height: "100%", flexDirection: "row", alignContent: "center", justifyContent: "center" }}>
                        <View style={{ width: "90%", height: "100%", flexDirection: "row", borderBottomWidth: .75, borderBottomColor: color.HIGHLIGHT }}>
                            <Text style={[fontSize.PAGE_TITLE, { flex: 1, color: color.WHITE, marginRight: "auto", alignSelf: 'center', }]}>WORKOUTS</Text>
                            <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 50, alignSelf: "center" }} onPress={() => navigation.navigate("NewRoutine")}>
                                <Image style={{ width: "100%", height: "100%" }} source={require("../../../assets/addWorkout.png")} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ),
                // headerRight: (

                // )
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