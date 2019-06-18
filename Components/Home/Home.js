import React from 'react';
import Header from './Sections/Header';
import { color } from '../config/colors';
import { View, StyleSheet } from 'react-native';
import NextWorkout from './Sections/Next Workout/NextWorkout';
import OtherRoutines from './Sections/Other Routines/OtherRoutines';
import CurrentRoutine from './Sections/Current Routine/CurrentRoutine';

const Home = (props) => {
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
        justifyContent: "space-evenly",
        backgroundColor: color.PRIMARY_DARK,
    }
})

export default Home;