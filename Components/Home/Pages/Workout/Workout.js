import { connect } from 'react-redux';
import React, { Component } from 'react';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';
import ExerciseCard from './Components/ExerciseCard';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { addExercise, removeExercise } from '../../../../Redux/Actions/workoutAction';

// Check if Exercise is already in Workout
const isInWorkout = (exercises, item) => {
    let result = false;
    exercises.map((exercise) => {
        if (exercise === item) {
            result = true;
        }
    })

    return result;
}

class Workout extends React.PureComponent {
    // Set Header as the param given when page is called
    static navigationOptions({ navigation }) {
        const Workout = navigation.getParam("workout", "noWorkout");

        return {
            headerTitle: Workout
        }
    }

    // local state to track current Tab
    state = {
        tab: 1
    }

    // Tab Component
    Tab = () => {
        const { tab } = this.state;
        return (
            <View style={styles.tabCol}>
                <TouchableOpacity
                    onPress={() => this.setState({ tab: 1 })}
                    style={[
                        {
                            borderTopLeftRadius: 5,
                            backgroundColor: tab === 1 ? color.SECONDARY_DARK : color.TERTIARY_DARK
                        },
                        styles.tabContainer]
                    }>
                    <Text style={[fontSize.SECTION_TITLE, styles.tabTitle]}>LIBRARY</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.setState({ tab: 2 })}
                    style={[
                        {
                            borderTopRightRadius: 5,
                            backgroundColor: tab === 2 ? color.SECONDARY_DARK : color.TERTIARY_DARK
                        },
                        styles.tabContainer]}>
                    <Text style={[fontSize.SECTION_TITLE, styles.tabTitle]}>EXERCISES</Text>
                </TouchableOpacity>
            </View>
        )
    }

    // Render item in FlatList
    renderItem = ({ Workouts, Exercises }, currentWorkout, Exercise) => {
        const { tab } = this.state;
        const { workouts } = Workouts;
        const { exercises } = Exercises;

        // If Exercise is in Workout
        if (tab === 1 && isInWorkout(workouts[currentWorkout].Exercises, Exercise)) {
            return null;
        }

        const { Type } = exercises[Exercise];

        return (
            <ExerciseCard
                Muscle={Type}
                Exercise={Exercise}
                isDeletable={tab === 2}
                addAction={() => this.props.dispatch(addExercise(currentWorkout, Exercise))}
                delAction={() => this.props.dispatch(removeExercise(currentWorkout, Exercise))}
            />
        )
    }

    render() {
        const HEIGHT = 120;
        const { tab } = this.state;
        const { props, renderItem } = this;
        const { navigation, Workouts } = props;

        // Get param from navigation
        const Workout = navigation.getParam("workout", "noWorkout");

        const { workouts } = Workouts;
        const { exercisesNames } = props.Exercises;

        // Get Exercises from current Workout
        const { Exercises } = workouts[Workout];

        // If no param was sent or found then redirect back to previous page
        if (Workout === "noWorkout") {
            // Send message to inform user of reason
            return (
                navigation.goBack()
            )
        } else {
            return (
                <View style={styles.container}>
                    <FlatList
                        numColumns="1"
                        extraData={Exercises}
                        overScrollMode="never"
                        stickyHeaderIndices={[0]}
                        ListHeaderComponent={() => this.Tab()}
                        data={tab === 1 ? exercisesNames : Exercises}
                        style={{ flex: 1, marginTop: 30, flexDirection: "column" }}
                        keyExtractor={(item, index) => `${Workout}-${item}-${index}`}
                        renderItem={({ item, index }) => renderItem(props, Workout, item)}
                        getItemLayout={(data, index) => ({ length: HEIGHT, offset: (HEIGHT + 10) * index, index })}
                        ItemSeparatorComponent={(item, index) =>
                            tab === 1 && isInWorkout(Exercises, item.leadingItem) ?
                                null
                                : <View style={{ width: "100%", height: 10 }}></View>}
                    />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        paddingBottom: 15,
        flexDirection: "column",
        backgroundColor: color.PRIMARY_DARK,
    },
    row: {
        flex: 1,
        flexDirection: "column"
    },
    tabCol: {
        flex: 1,
        height: 40,
        width: "90%",
        alignSelf: "center",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: color.PRIMARY_DARK
    },
    tabContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    tabTitle: {
        flex: .5,
        color: color.WHITE,
        textAlign: 'center'
    }
})

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Workout);