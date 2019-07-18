import React from 'react';
import { color } from '../../../../config/colors';
import { fontSize } from '../../../../config/fontSize';
import SwipeableCard from '../../../../Views/SwipeableCard';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { DeleteAction, RightAction } from '../SwipeActions/Actions';

const WorkoutCard = (props) => {
    const { isEditable, leftAction, rightAction, workoutName, numOfExercises, muscles } = props;
    const workoutInitial = workoutName[0];
    return (
        <SwipeableCard
            leftAction={leftAction}
            rightAction={rightAction}
            containerStyle={
                {
                    borderLeftWidth: 5,
                    borderRightWidth: 5,
                    flexDirection: "column",
                    justifyContent: "center",
                    borderLeftColor: isEditable ? color.GREEN : color.RED,
                    borderRightColor: isEditable ? color.GREEN : color.HIGHLIGHT
                }
            }
        >
            <View style={styles.workoutCol}>
                <View style={styles.workoutCircleContainer}>
                    <View style={styles.workoutCircle}>
                        <Text style={[styles.workoutInit, fontSize.SECTION_TITLE]}>{workoutInitial}</Text>
                    </View>
                </View>
                <TextInput
                    maxLength={60}
                    numberOfLines={1}
                    autoCapitalize="characters"
                    defaultValue={workoutName.toUpperCase()}
                    style={[styles.workoutName, fontSize.SECTION_TITLE]}>
                </TextInput>
            </View>
            <View style={styles.workoutCol}>
                <View style={styles.workoutStatsContainer}>
                    <Text style={[styles.workoutStatsTitle, fontSize.CARD_TITLE]}>EXERCISES</Text>
                    <Text style={[styles.workoutStatsText, fontSize.CARD_TITLE]}>{numOfExercises}</Text>
                </View>
                <View style={styles.workoutStatsContainer}>
                    <Text style={[styles.workoutStatsTitle, fontSize.CARD_TITLE]}>MUSCLES</Text>
                    <Text style={[styles.workoutStatsText, fontSize.CARD_TITLE]}>{muscles}</Text>
                </View>
            </View>
        </SwipeableCard>
    )
}

const styles = StyleSheet.create({
    workoutCol: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    workoutCircleContainer: {
        flex: .2,
        height: "100%",
        justifyContent: "center",
    },
    workoutCircle: {
        width: 40,
        height: 40,
        alignItems: "center",
        borderRadius: 40 / 2,
        justifyContent: "center",
        backgroundColor: color.HIGHLIGHT
    },
    workoutInit: {
        color: color.SECONDARY_DARK
    },
    workoutName: {
        flex: .75,
        height: "100%",
        color: color.WHITE,
    },
    workoutStatsContainer: {
        flex: 1,
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    workoutStatsTitle: {
        flex: .3,
        color: color.GREY,
    },
    workoutStatsText: {
        flex: .4,
        color: color.WHITE,
    }
})

export default WorkoutCard;