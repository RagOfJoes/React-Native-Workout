import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import normalizeText from '../config/normalizeText';

// TODO: addWorkout should be using drawable folders
// create action for addWorkout(on press change page or open up a modal to create a new workout plan)
const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>WORKOUTS</Text>
            <TouchableOpacity style={styles.addWorkout} onPress={() => console.log("Pressed")}>
                <Image style={{ width: 20, height: 20 }} resizeMode="contain" source={require("../../assets/addWorkout.png")} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        top: 45,
        height: 40,
        width: '80%',
        marginBottom: 50,
        alignSelf: 'center',
        flexDirection: 'row',
        borderBottomWidth: .75,
        borderBottomColor: '#D2D2D2',
    },
    title: {
        fontSize: 25,
        color: '#303031',
        marginRight: 'auto',
        alignSelf: 'center',
        fontFamily: 'Roboto-Medium'
    },
    addWorkout: {
        width: 20,
        height: 20,
        marginLeft: 'auto',
        alignSelf: 'center'
    }
})

export default Header;