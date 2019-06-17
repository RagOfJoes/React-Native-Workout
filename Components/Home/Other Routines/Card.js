import React from 'react';
import { color } from '../../config/colors';
import { fontSize } from '../../config/fontSize';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <TouchableOpacity style={styles.otherRoutinesCardContainer}>
            <Text style={[fontSize.CARD_SECONDARY_TEXT, styles.otherRoutinesCardText]} numberOfLines={3}>stronglift 5x5</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    otherRoutinesCardContainer: {
        margin: 4,
        flex: 1.25,
        maxWidth: 75,
        maxHeight: 70,
        alignItems: "center",
        paddingHorizontal: 5,
        justifyContent: "center",
        backgroundColor: color.TERTIARY_DARK,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    otherRoutinesCardText: {
        color: color.WHITE,
        textAlign: "center",
        textTransform: "uppercase",
    }
})

export default Card;