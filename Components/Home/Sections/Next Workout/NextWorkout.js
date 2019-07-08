import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import WorkoutCard from '../../../Views/WorkoutCard/WorkoutCard';

const NextWorkout = (props) => {
    const { Workouts, WorkoutNames } = props.routines["Push Pull Legs"];
    const { ExercisesNames } = Workouts[WorkoutNames[0]];
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <WorkoutCard
                exercises={ExercisesNames}
                workoutName={WorkoutNames[0]}
                currentRoutine="Push Pull Legs"
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return state.Routines;
}

export default connect(mapStateToProps)(NextWorkout);