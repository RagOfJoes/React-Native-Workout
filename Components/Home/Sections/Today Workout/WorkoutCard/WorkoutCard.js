import React from 'react';
import Muscle from '../../../../Views/Muscle';
import { connect } from 'react-redux';
import styles from './WorkoutCardStyle';
import { fontSize } from '../../../../config/fontSize';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Check if Objects are empty
const isEmpty = (Exercises, item, type) => {
    return Exercises.exercises[item].Type ? false : true;
}

// Custom RenderItem Function
const renderItem = ({ workoutName, Exercises }, item, index) => {
    const { exercises } = Exercises;
    // Get MuscleName if UNDEFINED then return NULL
    if (isEmpty(Exercises, item, "Muscle")) {
        return null;
    } else {
        const muscleName = exercises[item].Type;

        const key = `${workoutName}-${item}-${index}`;
        return (
            <Muscle key={key} containerStyle={styles.muscleContainer} muscleName={muscleName} />
        )
    }
}

// Empty Indicator Component 
const Empty = () => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={[fontSize.CARD_TITLE, styles.emptyContent]}>No Exercises to show</Text>
        </View>
    )
}

// Start button
const Start = () => {
    return (
        <TouchableOpacity style={styles.startContainer}>
            <Text style={[fontSize.CARD_TITLE, styles.startText]}>START</Text>
        </TouchableOpacity>
    )
}

class WorkoutCard extends React.Component {
    // Prevents component from completely re-rendering
    shouldComponentUpdate(nextProps, nextState) {
        const { exercises } = this.props;
        const { Workouts, workoutName } = nextProps;
        const { workouts } = Workouts;

        const nextWorkout = workouts[workoutName].Exercises;

        return exercises !== nextWorkout;
    }

    render() {
        const { props } = this;

        const { Workouts, workoutName, exercises } = props;
        const { workouts } = Workouts;
        const numOfExercises = workouts[workoutName].Exercises.length;
        return (
            <View style={styles.workoutCardContainer}>
                <View style={styles.workoutCardBackground}>
                    {/* Start Workout Card */}
                    <View style={styles.workoutCardRow}>
                        {/* Start Workout Title */}
                        <View style={styles.workoutCardTitle}>
                            {/* <Text style={[fontSize.CARD_TITLE, styles.title]} numberOfLines={2}>Today Workout</Text> */}
                            <Text numberOfLines={2} ellipsizeMode="tail" style={[fontSize.PAGE_TITLE, styles.workoutName]}>{workoutName}</Text>
                            <Text style={[fontSize.CARD_SECONDARY_TEXT, styles.exercisesTitle]}>EXERCISES</Text>
                            <Text style={[fontSize.CARD_SECONDARY_TEXT, styles.exercisesNum]}>{numOfExercises}</Text>
                            <Start />
                        </View>
                        {/* End Workout Title */}

                        {/* Start Muscle Groups */}
                        <FlatList
                            numColumns="3"
                            data={exercises}
                            scrollEnabled={true}
                            style={styles.muscleGroup}
                            ListEmptyComponent={() => <Empty />}
                            contentContainerStyle={{ flexGrow: 1 }}
                            renderItem={({ item, index }) => renderItem(props, item, index)}
                            keyExtractor={(item, index) => `${workoutName}-${item}-${index}`}
                        />
                        {/* End Muscle Groups */}
                    </View>
                    {/* End Workout Card */}
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(WorkoutCard);