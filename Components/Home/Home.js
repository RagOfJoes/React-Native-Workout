import React, { Component } from 'react';
import Header from './Header';
import { color } from '../config/colors';
import NextWorkout from './Next Workout/NextWorkout';
import OtherRoutines from './Other Routines/OtherRoutines';
import CurrentRoutine from './Current Routine/CurrentRoutine';
import { View, StyleSheet } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <NextWorkout />
                <CurrentRoutine />
                <OtherRoutines />
            </View>
        )
    }
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