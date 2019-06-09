import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NextWorkout = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Next Workout</Text>
            <Text style={styles.currentWorkout} numberOfLines={1} ellipsizeMode='tail'>BICEP AND TRICEPS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        height: 170,
        width: '80%',
        marginTop: 50,
        paddingTop: 25,
        borderRadius: 5,
        paddingLeft: 20,
        alignSelf: 'center',
        flexDirection: 'column',
        backgroundColor: '#303031',
    },
    title: {
        fontSize: 10,
        color: '#828282',
    },
    currentWorkout: {
        left: -1.5,
        margin: 0,
        padding: 0,
        fontSize: 35,
        color: '#F2F2F2',
    }
})

export default NextWorkout;