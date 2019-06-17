import React from 'react';
import { color } from '../config/colors';
import { fontSize } from '../config/fontSize';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import normalizeText from '../config/normalizeText';

// TODO: addWorkout should be using drawable folders
// create action for addWorkout(on press change page or open up a modal to create a new workout plan)
const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={[fontSize.PAGE_TITLE, styles.title]}>WORKOUTS</Text>
            <TouchableOpacity style={styles.addWorkout} onPress={() => console.log("Pressed")}>
                <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={require("../../assets/addWorkout.png")} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '80%',
        height: "auto",
        alignSelf: 'center',
        flexDirection: 'row',
        borderBottomWidth: .75,
        borderBottomColor: color.HIGHLIGHT,
    },
    title: {
        color: color.WHITE,
        marginRight: 'auto',
        alignSelf: 'center',
    },
    addWorkout: {
        width: 30,
        height: 30,
        alignSelf: 'center'
    }
})

export default Header;