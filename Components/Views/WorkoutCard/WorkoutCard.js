import React from 'react';
import { connect } from 'react-redux';
import styles from './WorkoutCardStyle';
import Muscle from '../Muscle';
import { View, Text, FlatList } from 'react-native';
import { fontSize } from '../../config/fontSize';

// Check if Objects are empty
const isEmpty = (routines, currentRoutine, workoutName, item, type) => {
    const workout = routines[currentRoutine].Workouts[workoutName];
    if (routines[currentRoutine].Workouts[workoutName]) {
        switch (type) {
            case "Exercise":
                return workout.ExercisesNames ? false : true;
            case "Muscle":
                return workout.Exercises && workout.Exercises[item] && workout.Exercises[item].Type ? false : true;
            default:
                return true;
        }
    }
    return true;
}

// Custom RenderItem Function
const renderItem = ({ routines, currentRoutine, workoutName }, item, index) => {
    const exerciseLength = isEmpty(routines, currentRoutine, workoutName, item, "Exercise") === false ?
        routines[currentRoutine].Workouts[workoutName].ExercisesNames.length : 0;

    // Get MuscleName if UNDEFINED then return Empty
    const muscleName = !isEmpty(routines, currentRoutine, workoutName, item, "Muscle") ?
        routines[currentRoutine].Workouts[workoutName].Exercises[item].Type
        : "Empty";

    const key = `${workoutName}-${item}-${index}`;

    return (
        <Muscle key={key} containerStyle={styles.muscleContainer} muscleName={muscleName} />
    )
}

// Empty Indicator Component 
const Empty = () => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={[fontSize.CARD_TITLE, styles.emptyContent]}>No Exercises to show</Text>
        </View>
    )
}

class WorkoutCard extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        const { exercises } = this.props;
        const { routines, currentRoutine, workoutName } = nextProps;

        const nextWorkout = routines[currentRoutine].Workouts[workoutName].ExercisesNames;

        return exercises !== nextWorkout;
    }

    render() {
        const { props } = this;
        const { workoutName, exercises } = props;
        return (
            <View style={styles.workoutCardContainer}>
                <View style={styles.workoutCardBackground}>
                    {/* Start Workout Card */}
                    <View style={styles.workoutCardRow}>
                        {/* Start Workout Title */}
                        <View style={styles.workoutCardTitle}>
                            <Text style={[fontSize.CARD_TITLE, styles.title]} numberOfLines={1}>Next Workout</Text>
                            <Text style={[fontSize.CARD_CONTENT, styles.workoutName]}>{workoutName}</Text>
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
    return state.Routines;
}

export default connect(mapStateToProps)(WorkoutCard);