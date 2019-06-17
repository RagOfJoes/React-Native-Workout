import React, { Component } from 'react';
import { color } from '../../config/colors';
import { fontSize } from '../../config/fontSize';
import { View, StyleSheet } from 'react-native';

const NewRoutine = (props) => {
    return (
        <View style={styles.NewRoutineContainer}>

        </View>
    )
}

const styles = StyleSheet.create({
    NewRoutineContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: color.PRIMARY_DARK
    }
})

export default NewRoutine;