import React from 'react';
import { connect } from 'react-redux';
import Header from './Components/Header';
import { color } from '../../../config/colors';
import createUID from '../../../config/createUID';
import WorkoutCard from './Components/WorkoutCard';
import { fontSize } from '../../../config/fontSize';
import { addWorkout, delWorkout } from '../../../../Redux/Actions/routineAction';
import { View, Text, FlatList, StyleSheet } from 'react-native';
class Routine extends React.PureComponent {
    // Custom Render Function
    renderItem = (currentRoutine, currWorkouts, item) => {
        // Props
        const { Workouts, Exercises } = this.props;
        const { exercises } = Exercises;

        // Check if item is deleteable
        const isDeletable = currWorkouts.length > 1;

        // Retrieve workouts exercises
        const workoutExercises = Workouts.workouts[item].Exercises;
        const numOfExercises = workoutExercises.length;

        // Creates a new set(Prevents duplicate Keys) w/ unique Muscle Types.
        const muscles = [...new Set(workoutExercises.map((exercise, index) => exercises[exercise].Type))];
        // const muscles = ["Chest", "Shoulders"];

        let musclesString;

        if (muscles.length > 2) {
            // Converts array of Muscles to String
            musclesString = muscles.join(", ");
            // Adds and onto final word in list
            musclesString = musclesString.replace(/ ([^,]*)$/, " and $1");
        } else {
            musclesString = muscles.join(" and ");
        }

        return (
            <WorkoutCard
                workoutName={item}
                muscles={musclesString}
                numOfExercises={numOfExercises}
                editAction={() => this.props.navigation.navigate("Workout", { workout: item })}
                addAction={() => this.props.dispatch(addWorkout(currentRoutine, `Workout ${createUID()}`))}
                delAction={() => isDeletable ? this.props.dispatch(delWorkout(currentRoutine, item)) : null}
            />
        )
    }

    render() {
        const HEIGHT = 120;
        const { props } = this;
        const { routines, currentRoutine } = props.Routines;
        const { Workouts } = routines[currentRoutine];

        return (
            <View style={styles.RoutineWrapper} >
                <View style={styles.RoutineContainer}>
                    <Header routineName={currentRoutine} />
                    {/* Start Workouts Card */}
                    <View style={styles.workoutRow}>
                        <View style={styles.workoutTitleCol}>
                            <Text style={[fontSize.SECTION_TITLE, styles.workoutTitle]}>WORKOUTS</Text>
                        </View>
                        <FlatList
                            numColumns="1"
                            data={Workouts}
                            extraData={Workouts}
                            overScrollMode="never"
                            style={{ flex: 1, flexDirection: "column" }}
                            keyExtractor={(item, index) => `${currentRoutine}-${item}-${index}`}
                            renderItem={({ item, index }) => this.renderItem(currentRoutine, Workouts, item)}
                            ItemSeparatorComponent={() => <View style={{ width: "100%", height: 10 }}></View>}
                            getItemLayout={(data, index) => ({ length: HEIGHT, offset: (HEIGHT + 10) * index, index })}
                        />
                    </View>
                    {/* End Workouts Card */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    RoutineWrapper: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: color.PRIMARY_DARK
    },
    RoutineContainer: {
        flex: 1,
        height: "100%",
        paddingVertical: 30,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    // Start Exercises
    workoutRow: {
        flex: 1,
        width: "100%",
        marginTop: 30,
        borderRadius: 5,
        flexDirection: "column",
        justifyContent: "center"
    },
    workoutTitleCol: {
        flex: .1,
        height: 20,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
    },
    workoutTitle: {
        width: "100%",
        color: color.WHITE,
        textAlign: 'center'
    },
    // End Exercises
})

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Routine);