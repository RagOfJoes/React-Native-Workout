import React from 'react';
import Week from './Sections/Week/Week';
import { color } from '../config/colors';
import { View, StyleSheet } from 'react-native';
import UserProgress from './Sections/User Progress/UserProgress';
import TodayWorkout from './Sections/Today Workout/TodayWorkout';
import OtherRoutines from './Sections/Other Routines/OtherRoutines';

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Week />
            <TodayWorkout />
            <OtherRoutines />
            <UserProgress />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-evenly",
        backgroundColor: color.PRIMARY_DARK,
    }
})

export default Home;