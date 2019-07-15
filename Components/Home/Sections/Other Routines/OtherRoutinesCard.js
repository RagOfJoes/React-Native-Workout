import React from 'react';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';
import SwipeableCard from '../../../Views/SwipeableCard';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const OtherRoutinesCard = (props) => {
    const { routineName, numOfWorkouts, numOfExercises } = props;

    return (
        <SwipeableCard containerStyle={styles.containerStyle}>
            <View style={styles.row}>
                <View style={styles.circleContainer}>
                    <View style={styles.circleView}></View>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={[styles.nameTitle, fontSize.CARD_TITLE]}>ROUTINE NAME</Text>
                    <Text style={[fontSize.CARD_CONTENT, styles.nameText]}>{routineName}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.statsContainer}>
                    <Text style={[styles.statsTitle, fontSize.CARD_TITLE]}>WORKOUTS</Text>
                    <Text style={[styles.statsText, fontSize.CARD_TITLE]}>{numOfWorkouts}</Text>
                </View>
                <View style={styles.statsContainer}>
                    <Text style={[styles.statsTitle, fontSize.CARD_TITLE]}>EXERCISES</Text>
                    <Text style={[styles.statsText, fontSize.CARD_TITLE]}>{numOfExercises}</Text>
                </View>
            </View>
        </SwipeableCard>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        width: Dimensions.get("screen").width / 1.5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    circleContainer: {
        flex: .4,
        justifyContent: "center",
    },
    circleView: {
        backgroundColor: color.HIGHLIGHT,
        width: Dimensions.get("screen").width / 10,
        height: Dimensions.get("screen").width / 10,
        borderRadius: Dimensions.get("screen").width / 20,
    },
    nameContainer: {
        flex: .6,
        justifyContent: "center"
    },
    nameTitle: {
        flex: .3,
        color: color.GREY,
    },
    nameText: {
        flex: .4,
        color: color.WHITE,
    },
    statsContainer: {
        flex: 1,
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    statsTitle: {
        flex: .3,
        color: color.GREY,
    },
    statsText: {
        flex: .4,
        color: color.WHITE,
    }
})

export default OtherRoutinesCard;