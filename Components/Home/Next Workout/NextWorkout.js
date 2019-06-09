import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NextWorkout = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Next Workout</Text>
            </View>
            <View>
                <Text style={styles.currentWorkout}>PUSH</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 170,
        // padding: 15,
        width: '80%',
        borderRadius: 5,
        alignSelf: 'center',
        fontFamily: 'Roboto',
        flexDirection: 'column',
        backgroundColor: '#303031',
    },
    title: {
        fontSize: 10,
        color: '#828282',
        textAlignVertical: 'top'
    },
    currentWorkout: {
        fontSize: 35,
        color: '#F2F2F2',
        textAlignVertical: 'top'
    }
})

export default NextWorkout;