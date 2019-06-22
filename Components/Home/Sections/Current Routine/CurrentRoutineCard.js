import React from 'react';
import Card from '../../../Views/Card';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// TODO: Check if date is today if so then change color to indicate as such
const CurrentRoutineCard = ({ workout, date }) => {
    return (
        <Card containerStyle={styles.cardContainer} isTouchable>
            <View style={styles.routineContainer}>
                <Text style={[fontSize.CARD_CONTENT, styles.routineName]} numberOfLines={3}>{workout}</Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={[fontSize.CARD_SECONDARY_TEXT, styles.date]}>{date}</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        maxWidth: 80,
        maxHeight: 130,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.SECONDARY_DARK,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    routineContainer: {
        flex: 3,
        justifyContent: "center",
    },
    routineName: {
        color: color.WHITE,
        textAlign: "center",
        textTransform: "uppercase",
    },
    dateContainer: {
        flex: .4,
        borderTopWidth: .75,
        flexDirection: "row",
        borderTopColor: color.HIGHLIGHT,
    },
    date: {
        zIndex: 2,
        width: "100%",
        alignSelf: "center",
        color: color.WHITE,
        textAlign: "center",
        textTransform: "uppercase",
    }
})

export default CurrentRoutineCard;