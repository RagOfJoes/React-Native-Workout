import React, { Component } from 'react';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';
import CurrentRoutineCard from './CurrentRoutineCard';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';

const data = [
    {
        Date: "Monday",
        Workout: "Push"
    },
    {
        Date: "Tuesday",
        Workout: "Pull"
    },
    {
        Date: "Wednesday",
        Workout: "Legs"
    },
    {
        Date: "Thursday",
        Workout: "Break"
    },
    {
        Date: "Friday",
        Workout: "Push"
    },
    {
        Date: "Saturday",
        Workout: "Pull"
    },
    {
        Date: "Sunday",
        Workout: "Legs"
    },
]

class CurrentRoutine extends Component {
    isScrolled = (contentOffset) => {
        return contentOffset.x > 0;
    }

    render() {
        return (
            <View style={{ flex: 1, overflow: 'hidden', justifyContent: "center" }}>
                <View style={styles.currentRoutineContainer}>
                    <View style={{ borderBottomWidth: .75, borderBottomColor: color.HIGHLIGHT }}>
                        <Text style={[fontSize.SECTION_TITLE, styles.currentRoutineText]}>
                            CURRENT ROUTINE
                        </Text>
                    </View>

                    <FlatList
                        data={data}
                        numColumns="1"
                        horizontal={true}
                        scrollEnabled={true}
                        style={{ flex: 1, width: "100%" }}
                        keyExtractor={(item, index) => item.Date}
                        renderItem={({ item, index }) => <CurrentRoutineCard date={item.Date} workout={item.Workout} />}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    currentRoutineContainer: {
        height: 170,
        width: "90%",
        overflow: "visible",
        alignSelf: "center",
        flexDirection: "column",
    },
    currentRoutineText: {
        color: color.WHITE,
    },
    currentRoutineNextLeftContainer: {
        left: -5,
        top: "50%",
        marginLeft: "auto",
        alignItems: "center",
        position: "absolute",
        justifyContent: "center",
    },
    currentRoutineNextRightContainer: {
        right: -5,
        // top: "50%",
        alignItems: "center",
        position: "absolute",
        justifyContent: "center",
    }
})

export default CurrentRoutine;