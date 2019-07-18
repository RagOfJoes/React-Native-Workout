import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import WorkoutCard from './WorkoutCard/WorkoutCard';
import { fontSize } from '../../../config/fontSize';
import { color } from '../../../config/colors';

const TodayWorkout = (props) => {
    const { Routines, Workouts } = props;
    const { workouts, workoutNames } = Workouts;
    const { routines, currentRoutine } = Routines;
    const { Exercises } = workouts[routines[currentRoutine].Workouts[0]];
    return (
        <View style={{ flex: .45, justifyContent: "center" }}>
            <Text style={[fontSize.SECTION_TITLE, { width: "90%", color: color.WHITE, alignSelf: "center" }]}>TODAY'S WORKOUT</Text>
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

export default connect(mapStateToProps)(TodayWorkout);