import { connect } from 'react-redux';
import React, { Component } from 'react';
import { color } from '../../../config/colors';
import { View, FlatList, StyleSheet } from 'react-native';
import ExerciseCard from '../Routine/Components/ExerciseCard';

class Workout extends Component {
    static navigationOptions({ navigation }) {
        const Workout = navigation.getParam("workout", "noWorkout");

        return {
            headerTitle: Workout
        }
    }

    renderItem = ({ Exercises }, Exercise) => {
        const { exercises } = Exercises;
        const { Type } = exercises[Exercise];

        return (
            <ExerciseCard Muscle={Type} Exercise={Exercise} />
        )
    }

    render() {
        const HEIGHT = 120;
        const { props, renderItem } = this;
        const { navigation, Workouts } = props;

        // Get param from navigation
        const Workout = navigation.getParam("workout", "noWorkout");

        const { workouts } = Workouts;

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
                        data={Exercises}
                        extraData={Exercises}
                        overScrollMode="never"
                        renderItem={({ item, index }) => renderItem(props, item)}
                        style={{ flex: 1, marginTop: 30, flexDirection: "column" }}
                        keyExtractor={(item, index) => `${Workout}-${item}-${index}`}
                        ItemSeparatorComponent={() => <View style={{ width: "100%", height: 10 }}></View>}
                        getItemLayout={(data, index) => ({ length: HEIGHT, offset: (HEIGHT + 10) * index, index })}
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
})

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Workout);