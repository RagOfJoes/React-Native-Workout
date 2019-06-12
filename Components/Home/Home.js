import React from 'react';
import Header from './Header';
import NextWorkout from './Next Workout/NextWorkout';
import CurrentRoutine from './Current Routine/CurrentRoutine';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <NextWorkout />
            <CurrentRoutine />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2'
    }
})

export default Home;