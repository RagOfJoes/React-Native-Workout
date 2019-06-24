import { connect } from 'react-redux';
import React, { Component } from 'react';
import Card from '../../../../Views/Card';
import { color } from '../../../../config/colors';
import { fontSize } from '../../../../config/fontSize';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { View, Text, Animated, TouchableOpacity, Dimensions, TextInput, StyleSheet } from 'react-native';

const DeleteAction = ({ progress, dragX }) => {
    const scale = dragX.interpolate({
        inputRange: [0, 60],
        outputRange: [0, 1],
        extrapolate: "clamp"
    });

    const opacity = dragX.interpolate({
        inputRange: [0, 80],
        outputRange: [0, 1]
    })

    return (
        <Animated.View style={[{ opacity: opacity }, styles.deleteWorkoutRow]}>
            <TouchableOpacity style={{ width: "100%", height: "100%", alignContent: "center", justifyContent: "center" }}>
                <Animated.Text style={[fontSize.CARD_TITLE, { color: color.WHITE, textAlign: "center", transform: [{ scale: scale }] }]}>DELETE</Animated.Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

const RightAction = ({ progress, dragX }) => {
    const scale = dragX.interpolate({
        inputRange: [-60, 0],
        outputRange: [1, 0],
        extrapolate: "clamp"
    });

    const opacity = dragX.interpolate({
        inputRange: [-60, 0],
        outputRange: [1, 0]
    })

    return (
        <Animated.View style={[{ opacity: opacity }, styles.rightActionsRow]}>
            <TouchableOpacity style={{ flex: 1, height: "100%", justifyContent: "center", backgroundColor: color.HIGHLIGHT }}>
                <Animated.Text style={[fontSize.CARD_TITLE, { color: color.TERTIARY_DARK, textAlign: "center", transform: [{ scale: scale }] }]}>EDIT</Animated.Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, height: "100%", justifyContent: "center", backgroundColor: color.GREEN }}>
                <Animated.Text style={[fontSize.CARD_TITLE, { color: color.TERTIARY_DARK, textAlign: "center", transform: [{ scale: scale }] }]}>ADD</Animated.Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

class WorkoutCard extends Component {
    render() {
        return (
            <Card containerStyle={styles.workoutCard} addContStyle={{ paddingVertical: 15, paddingHorizontal: 25, alignItems: "center", alignContent: "center" }}
                leftActions={(progress, dragX) => <DeleteAction progress={progress} dragX={dragX} />}
                rightActions={(progress, dragX) => <RightAction progress={progress} dragX={dragX} />}
                isSwipeable>
                <View style={styles.workoutNameRow}>
                    <TextInput style={[fontSize.CARD_CONTENT, styles.workoutNameText]} placeholder="Name" placeholderTextColor={color.GREY} maxLength={20} autoCapitalize="words" />
                </View>
            </Card>
        )
    }
}

{/* <View style={styles.workoutNameRow}>
    <TextInput style={[fontSize.CARD_CONTENT, styles.workoutNameText]} placeholder="Name" placeholderTextColor={color.GREY} maxLength={20} autoCapitalize="words" />
</View> */}

const styles = StyleSheet.create({
    deleteWorkoutRow: {
        width: 80,
        height: "100%",
        justifyContent: "center",
        backgroundColor: color.RED
    },
    rightActionsRow: {
        width: 120,
        height: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    workoutCard: {
        flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: "row",
        backgroundColor: color.SECONDARY_DARK,

        borderTopWidth: .75,
        borderBottomWidth: .75,
        borderTopColor: color.TERTIARY_DARK,
        borderBottomColor: color.TERTIARY_DARK
    },
    workoutNameRow: {
        flex: 1,
        width: "90%",
        height: "100%",
        borderRadius: 5,
        paddingHorizontal: 15,
        backgroundColor: color.TERTIARY_DARK,

        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    workoutNameText: {
        width: "100%",
        height: "100%",
        color: color.WHITE
    }
});

export default WorkoutCard;