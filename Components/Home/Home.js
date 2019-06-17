import React from 'react';
import Header from './Header';
import { color } from '../config/colors';
import NextWorkout from './Next Workout/NextWorkout';
import OtherRoutines from './Other Routines/OtherRoutines';
import CurrentRoutine from './Current Routine/CurrentRoutine';
import { View, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <NextWorkout />
            <CurrentRoutine />
            <OtherRoutines />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: color.PRIMARY_DARK,
        justifyContent: "space-evenly",
    }
})

export default Home;