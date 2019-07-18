import React from 'react';
import { connect } from 'react-redux';
import Header from './Components/Header';
import { color } from '../../../config/colors';
import createUID from '../../../config/createUID';
import WorkoutCard from './Components/WorkoutCard';
import { fontSize } from '../../../config/fontSize';
import { DeleteAction, RightAction, AddAction } from './SwipeActions/Actions';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { delWorkout, newWorkout, addWorkout } from '../../../../Redux/Actions/routineAction';

const isInRoutine = (workouts, item) => {
    let result = false;
    workouts.map(workout => {
        if (workout === item) {
            result = true;
        }
    });
    return result;
}

class Routine extends React.PureComponent {
    state = {
        tab: 1,
    }

    // Custom Render Function
    renderItem = (currentRoutine, currWorkouts, item) => {
        const { tab } = this.state;
        // Props
        const { Workouts, Exercises } = this.props;
        const { workouts } = Workouts;
        const { exercises } = Exercises;

        // Check if workout is in current routine
        if (tab === 1 && isInRoutine(currWorkouts, item) === true) {
            return null;
        }

        // Check if item is deleteable
        const isDeletable = currWorkouts.length > 1;

        // Retrieve workouts exercises
        const workoutExercises = workouts[item].Exercises;
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
                isEditable={tab === 1}
                muscles={musclesString}
                numOfExercises={numOfExercises}
                leftAction={(progress, dragX) => {
                    return (
                        tab === 1 ?
                            <AddAction
                                isLeft
                                dragX={dragX}
                                progress={progress}
                                _pressAdd={() => this.props.dispatch(addWorkout(currentRoutine, item))}
                            />
                            :
                            <DeleteAction
                                dragX={dragX}
                                progress={progress}
                                _pressDel={() => isDeletable ? this.props.dispatch(delWorkout(currentRoutine, item)) : null}
                            />
                    )
                }
                }
                rightAction={(progress, dragX) => {
                    return (
                        tab === 1 ?
                            <AddAction
                                dragX={dragX}
                                progress={progress}
                                _pressAdd={() => this.props.dispatch(addWorkout(currentRoutine, item))}
                            />
                            :
                            <RightAction
                                dragX={dragX}
                                progress={progress}
                                _pressEdit={() => this.props.navigation.navigate("Workout", { workout: item })}
                                _pressAdd={() => this.props.dispatch(newWorkout(currentRoutine, `Workout ${createUID()}`))}
                            />
                    )
                }
                }
            />
        )
    }

    render() {
        const HEIGHT = 120;
        const { state, props } = this;
        const { tab } = state;
        const { routines, currentRoutine } = props.Routines;
        const { Workouts } = routines[currentRoutine];
        const { workoutNames } = props.Workouts;

        return (
            <View style={styles.RoutineWrapper} >
                <View style={styles.RoutineContainer}>
                    <Header routineName={currentRoutine} />
                    {/* Start Workouts Card */}
                    <View style={styles.workoutRow}>
                        <View style={styles.workoutTitleCol}>
                            <TouchableOpacity
                                onPress={() => this.setState({ tab: 1 })}
                                style={[
                                    {
                                        borderTopLeftRadius: 5,
                                        backgroundColor: tab === 1 ? color.SECONDARY_DARK : color.TERTIARY_DARK
                                    },
                                    styles.workoutTabContainer]
                                }>
                                <Text style={[fontSize.SECTION_TITLE, styles.workoutTitle]}>LIBRARY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ tab: 2 })}
                                style={[
                                    {
                                        borderTopRightRadius: 5,
                                        backgroundColor: tab === 2 ? color.SECONDARY_DARK : color.TERTIARY_DARK
                                    },
                                    styles.workoutTabContainer]}>
                                <Text style={[fontSize.SECTION_TITLE, styles.workoutTitle]}>WORKOUTS</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            numColumns="1"
                            extraData={Workouts}
                            overScrollMode="never"
                            data={tab === 1 ? workoutNames : Workouts}
                            style={{ flex: 1, flexDirection: "column" }}
                            keyExtractor={(item, index) => `${currentRoutine}-${item}-${index}`}
                            renderItem={({ item, index }) => this.renderItem(currentRoutine, Workouts, item)}
                            ItemSeparatorComponent={(item, index) => tab === 1 && isInRoutine(Workouts, item.leadingItem) ? null : <View style={{ width: "100%", height: 10 }}></View>}
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
        width: "90%",
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
    },
    workoutTabContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    workoutTitle: {
        flex: .5,
        color: color.WHITE,
        textAlign: 'center'
    },
    // End Exercises
})

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Routine);