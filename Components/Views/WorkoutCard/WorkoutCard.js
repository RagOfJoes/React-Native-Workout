import React from 'react';
import Muscle from '../Muscle';
import { connect } from 'react-redux';
import styles from './WorkoutCardStyle';
import { fontSize } from '../../config/fontSize';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// Check if Objects are empty
const isEmpty = (Workouts, Exercises, item, type) => {
    return Exercises.exercises[item].Type ? false : true;
}

// Custom RenderItem Function
const renderItem = ({ Workouts, workoutName, Exercises }, item, index) => {
    const { exercises } = Exercises;
    // Get MuscleName if UNDEFINED then return Empty
    const muscleName = !isEmpty(Workouts, Exercises, item, "Muscle") ?
        exercises[item].Type
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

const Start = () => {
    return (
        <TouchableOpacity style={styles.startContainer}>
            <Text style={[fontSize.CARD_TITLE, styles.startText]}>START</Text>
        </TouchableOpacity>
    )
}

class WorkoutCard extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        const { exercises } = this.props;
        const { Workouts, workoutName } = nextProps;
        const { workouts } = Workouts;

        const nextWorkout = workouts[workoutName].Exercises;

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