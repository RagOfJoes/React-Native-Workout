import React from 'react';
import Home from '../Home/Home';
import { color } from '../config/colors';
import { View, Image, StyleSheet } from 'react-native';
// import {}
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// Icons
import HomeInactive from '../../assets/Home-Inactive.png';
import ExercisesInactive from '../../assets/Exercises-Inactive.png';
import PRInactive from '../../assets/PR-Inactive.png';
import ScaleInactive from '../../assets/Scale-Inactive.png';

const Nav = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return (
                        <Image style={{ width: "60%", height: "60%", }} source={HomeInactive} resizeMode="contain"></Image>
                    )
                }
            },
        },
        Exercises: {
            screen: "Exercises",
            navigationOptions: {
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return (
                        <Image style={{ width: "65%", height: "65%", }} source={ExercisesInactive} resizeMode="contain"></Image>
                    )
                }
            }
        },
        PersonalRecord: {
            screen: "PersonalRecord",
            navigationOptions: {
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return (
                        <Image style={{ width: "60%", height: "60%", }} source={PRInactive} resizeMode="contain"></Image>
                    )
                }
            }
        },
        Weight: {
            screen: "Weight",
            navigationOptions: {
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return (
                        <Image style={{ width: "60%", height: "60%", }} source={ScaleInactive} resizeMode="contain"></Image>
                    )
                },
            }
        },
    }, {
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: {
                margin: 0,
                padding: 0,
                width: "100%",
                alignContent: "stretch",
                justifyContent: "center",
                backgroundColor: color.SECONDARY_DARK,

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: -3,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,

                elevation: 12,
            },
            tabStyle: {
                flex: 1,
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
            }
        },
        swipeEnabled: true,
        animationEnabled: true,
    }
)

export default createAppContainer(Nav);