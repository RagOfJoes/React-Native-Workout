import { connect } from 'react-redux';
import React, { Component } from 'react';
import { color } from '../../../config/colors';
import { View, FlatList, StyleSheet } from 'react-native';
import ExerciseCard from './Exercises/ExerciseCard';

class Workout extends Component {
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
        marginTop: "auto",
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    row: {
        flex: 1,
        maxHeight: "80%",
        paddingVertical: 15,
        flexDirection: "column",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: color.SECONDARY_DARK,
    },
})

const mapStateToProps = (state) => {
    return state.Routines;
}

export default connect(mapStateToProps)(Workout);