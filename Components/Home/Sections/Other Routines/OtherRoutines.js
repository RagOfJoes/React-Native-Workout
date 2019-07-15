import React from 'react';
import { connect } from 'react-redux';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';
import OtherRoutinesCard from './OtherRoutinesCard';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OtherRoutines = (props) => {
    const { Routines, Workouts, Exercises } = props;
    const { routines, routineNames } = Routines;
    const { workouts } = Workouts;

    return (
        <View style={styles.otherRoutineContainer}>
            <View style={styles.otherRoutineTitleRow}>
                <Text style={[fontSize.SECTION_TITLE, styles.otherRoutineTitle]}>OTHER ROUTINES</Text>
            </View>

            <FlatList
                horizontal
                scrollEnabled
                data={routineNames}
                keyExtractor={(item, index) => item}
                style={{ flex: 1, width: "90%", alignSelf: "center" }}
                renderItem={({ item, index }) => <OtherRoutinesCard routineName={item} numOfWorkouts={routines[item].Workouts.length} numOfExercises="12" />}
                ItemSeparatorComponent={() => <View style={{ width: 10, height: 10 }}></View>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    otherRoutineContainer: {
        flex: .5,
        width: "100%",
        alignSelf: "center",
    },
    otherRoutineTitleRow: {
        flex: .1,
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