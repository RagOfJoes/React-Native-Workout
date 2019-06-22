import React from 'react';
import OtherRoutinesCard from './OtherRoutinesCard';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OtherRoutines = (props) => {
    return (
        <View style={{ flex: .35, flexDirection: "column", justifyContent: "center", alignItems: "center", borderTopColor: color.HIGHLIGHT, borderTopWidth: .75, backgroundColor: color.SECONDARY_DARK }}>
            <View style={styles.otherRoutineContainer}>
                <View style={styles.otherRoutineTitleRow}>
                    <Text style={[fontSize.SECTION_TITLE, styles.otherRoutineTextOne]}>OTHER ROUTINES</Text>
                    <TouchableOpacity style={{ flexDirection: "column", justifyContent: "center" }}>
                        <Text style={[fontSize.CARD_SECONDARY_TEXT, styles.otherRoutineTextTwo]}>SEE ALL</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.otherRoutineCardsRow}>
                    <OtherRoutinesCard />
                    <OtherRoutinesCard />
                    <OtherRoutinesCard />
                    <OtherRoutinesCard />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    otherRoutineContainer: {
        flex: .75,
        width: "90%",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center",
    },
    otherRoutineTitleRow: {
        flex: .7,
        flexDirection: 'row',
    },
    otherRoutineTextOne: {
        color: color.WHITE,
        marginRight: "auto",
    },
    otherRoutineTextTwo: {
        marginTop: "auto",
        color: color.GREY,
    },
    otherRoutineCardsRow: {
        flex: 3,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default OtherRoutines;