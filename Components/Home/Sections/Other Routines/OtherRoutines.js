import React from 'react';
import { connect } from 'react-redux';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';
import OtherRoutinesCard from './OtherRoutinesCard';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const getNumOfWorkouts = ({ Routines }, routineName) => {
    const { routines } = Routines;
    return routines[routineName].Workouts.length
}

const getNumOfExercises = ({ Routines, Workouts, Exercises }, routineName) => {
    let numOfExercises = 0;
    const { routines } = Routines;
    const { workouts } = Workouts;

    routines[routineName].Workouts.map((workout) => numOfExercises += workouts[workout].Exercises.length)

    return numOfExercises;
}

const OtherRoutines = (props) => {
    const { Routines, Workouts, Exercises } = props;
    const { routines, routineNames } = Routines;
    const { workouts } = Workouts;

    return (
        <View style={styles.otherRoutineContainer}>
            <View style={styles.otherRoutineTitleRow}>
                <Text style={[fontSize.SECTION_TITLE, styles.otherRoutineTitle]}>OTHER ROUTINES</Text>
            </View>

            {/* TODO: Ignore Routine if it is currentRoutine */}
            <FlatList
                horizontal
                scrollEnabled
                data={routineNames}
                keyExtractor={(item, index) => item}
                style={{ flex: 1, width: "90%", alignSelf: "center", overflow: "visible" }}
                ItemSeparatorComponent={() => <View style={{ width: 10, height: 10 }}></View>}
                getItemLayout={(data, index) => ({ length: 120 + 10, offset: 120 * index, index })}
                renderItem={({ item, index }) => <OtherRoutinesCard routineName={item} numOfWorkouts={getNumOfWorkouts(props, item)} numOfExercises={getNumOfExercises(props, item)} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    otherRoutineContainer: {
        flex: .3,
        width: "100%",
        alignSelf: "center",
        justifyContent: "center"
    },
    otherRoutineTitleRow: {
        flex: .15,
        width: "90%",
        alignSelf: "center",
        flexDirection: 'row',
    },
    otherRoutineTitle: {
        color: color.WHITE,
        marginRight: "auto",
    },
})

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(OtherRoutines);