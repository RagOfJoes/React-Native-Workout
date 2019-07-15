import React from 'react';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';
import { View, Text, StyleSheet } from 'react-native';
import SwipeableCard from '../../../Views/SwipeableCard';

const OtherRoutinesCard = (props) => {
    const { routineName, numOfWorkouts, numOfExercises } = props;

    return (
        <SwipeableCard containerStyle={{ width: 280 }}>
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
    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },
    circleContainer: {
        flex: .2,
        justifyContent: "center",
    },
    circleView: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: color.HIGHLIGHT
    },
    nameContainer: {
        flex: .75,
        justifyContent: "center",
    },
    nameTitle: {
        flex: .3,
        color: color.GREY
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