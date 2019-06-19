import Muscle from './Muscle';
import React, { Component } from 'react';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';

import { View, Text, FlatList, StyleSheet } from 'react-native';

// TODO: Fetch current routine and the day's planned workout
// 
const data = ["Chest", "Shoulders", "Legs", "Arms", "Back"];

const formatData = (data, numColumns) => {
    let numberOfElements = data.length;
    while (numberOfElements != 6) {
        numberOfElements++;
        if (numberOfElements !== 6) {
            data.push("Empty");
        } else {
            data.push("Last");
        }
    }

    return data;
};

class NextWorkout extends Component {
    _keyExtractor = (index) => {
        return index
    };

    render() {
        return (
            <View style={{ flex: .5, overflow: "hidden", justifyContent: "center" }}>
                <View style={styles.nextWorkoutContainerStyle}>
                    <View style={styles.nextWorkoutBackgroundStyle}>
                        {/* Start Workout Card */}
                        <View style={styles.nextWorkoutRow}>
                            {/* Start Workout Title */}
                            <View style={styles.nextWorkoutTitle}>
                                <Text style={[fontSize.CARD_TITLE, styles.title]} numberOfLines={1}>
                                    Next Workout
                                </Text>
                                <Text style={[fontSize.CARD_CONTENT, styles.currentWorkout]} numberOfLines={3} adjustsFontSizeToFit>
                                    pull a
                                </Text>
                            </View>
                            {/* End Workout Title */}

                            {/* Start Muscle Groups */}
                            <FlatList
                                numColumns="3"
                                scrollEnabled={false}
                                data={formatData(data, 3)}
                                style={styles.muscleGroup}
                                keyExtractor={this._keyExtractor}
                                contentContainerStyle={{ width: "100%", height: "100%", justifyContent: "center", alignContent: "center", padding: 10 }}
                                renderItem={({ item, index }) => { return (<Muscle key={index} muscleName={item} />) }}
                            />
                            {/* End Muscle Groups */}
                        </View>
                        {/* End Workout Card */}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nextWorkoutContainerStyle: {
        height: 170,
        width: '100%',
        alignItems: "center"
    },
    nextWorkoutBackgroundStyle: {
        width: "90%",
        height: "100%",
        borderRadius: 5,
        alignItems: "flex-start",
        flexDirection: 'column',
        backgroundColor: color.SECONDARY_DARK,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    nextWorkoutRow: {
        height: "100%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
    },
    // Start Title
    nextWorkoutTitle: {
        flex: .5,
        maxWidth: 115,
        maxHeight: "100%",
        textAlign: "center",
        alignItems: "center",
        borderTopLeftRadius: 5,
        justifyContent: "center",
        borderBottomLeftRadius: 5,
        backgroundColor: color.TERTIARY_DARK,
    },
    title: {
        marginBottom: -5,
        color: color.GREY,
        textAlign: "center",
        textTransform: "uppercase",
    },
    currentWorkout: {
        color: color.WHITE,
        textAlign: "center",
        textTransform: "uppercase",
    },
    // End Title

    // Start Muscle Group
    muscleGroup: {
        flex: 1,
        width: "100%",
        alignSelf: "center",
    }
    // End Muscle Group
})

export default NextWorkout;