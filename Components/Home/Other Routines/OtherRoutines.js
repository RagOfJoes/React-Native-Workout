import React from 'react';
import Card from './Card';
import { color } from '../../config/colors';
import { fontSize } from '../../config/fontSize';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OtherRoutines = (props) => {
    return (
        <View style={styles.otherRoutineContainer}>
            <View style={{ width: "80%", height: "100%", justifyContent: "center" }}>
                <View style={styles.otherRoutineTitleRow}>
                    <Text style={[fontSize.SECTION_TITLE, styles.otherRoutineTextOne]}>OTHER ROUTINES</Text>
                    <TouchableOpacity style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                        <Text style={[fontSize.CARD_SECONDARY_TEXT, styles.otherRoutineTextTwo]}>SEE ALL</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.otherRoutineCardsRow}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    otherRoutineContainer: {
        height: 140,
        width: "100%",
        paddingTop: 25,
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: color.SECONDARY_DARK
    },
    otherRoutineTitleRow: {
        flex: .75,
        flexDirection: 'row',
    },
    otherRoutineTextOne: {
        color: color.WHITE,
        marginRight: "auto",
    },
    otherRoutineTextTwo: {
        color: color.GREY,
        alignSelf: "flex-end"
    },
    otherRoutineCardsRow: {
        flex: 3,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default OtherRoutines;