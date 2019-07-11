import { connect } from 'react-redux';
import React, { Component } from 'react';
import { color } from '../../../config/colors';
import { View, FlatList, StyleSheet } from 'react-native';
import ExerciseCard from './Exercises/ExerciseCard';

class Workout extends Component {
    static navigationOptions({navigation}) {
        const Workout = navigation.getParam("workout", "noWorkout");

        return {
            headerTitle: Workout
        }
    }

    renderItem = ({ routines, currentRoutine }, Workout, Exercise) => {
        const { Type } = routines[currentRoutine].Workouts[Workout].Exercises[Exercise];

        return (
            <ExerciseCard Muscle={Type} Exercise={Exercise} />
        )
    }

    render() {
        const { props } = this;
        // TODO: Create WorkoutsReducer to reduce lookup and to take less params.
        const { navigation, routines, currentRoutine } = props;
        const Workout = navigation.getParam("workout", "noWorkout");
        const { ExercisesNames } = routines[currentRoutine].Workouts[Workout];


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
                        style={styles.row}
                        data={ExercisesNames}
                        overScrollMode="never"
                        extraData={ExercisesNames}
                        getItemLayout={(data, index) => { return { length: 120, offset: 120 * index, index } }}
                        keyExtractor={(item, index) => `${Workout}-${item}-${index}`}
                        renderItem={({ item, index }) =>
                            this.renderItem(props, Workout, item)
                        }
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
        paddingVertical: 15,
        flexDirection: "column",
        backgroundColor: color.PRIMARY_DARK,
    },
    row: {
        flex: 1,
        flexDirection: "column"
    },
})

const mapStateToProps = (state) => {
    return state.Routines;
}

export default connect(mapStateToProps)(Workout);