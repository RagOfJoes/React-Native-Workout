import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import WorkoutCard from '../../../Views/WorkoutCard/WorkoutCard';

const NextWorkout = (props) => {
    const { Routines, Workouts } = props;
    const { workouts, workoutNames } = Workouts;
    const { routines, currentRoutine } = Routines;
    // console.log(workouts);
    const { Exercises } = workouts[routines[currentRoutine].Workouts[0]];
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <WorkoutCard
                exercises={Exercises}
                workoutName={workoutNames[0]}
                currentRoutine={currentRoutine}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(NextWorkout);