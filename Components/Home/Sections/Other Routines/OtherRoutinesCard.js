import React from 'react';
import Card from '../../../Views/Card';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';
import { Text, Dimensions, StyleSheet } from 'react-native';

const OtherRoutinesCard = (props) => {
    return (
        <Card containerStyle={styles.otherRoutinesCardContainer} isTouchable>
            <Text style={[fontSize.CARD_SECONDARY_TEXT, styles.otherRoutinesCardText]} numberOfLines={3}>stronglift 5x5</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    otherRoutinesCardContainer: {
        flex: 1,
        margin: 5,
        paddingHorizontal: 5,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: color.TERTIARY_DARK,
        height: Dimensions.get("window").width / 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    otherRoutinesCardText: {
        lineHeight: 10,
        color: color.WHITE,
        textAlign: "center",
        textTransform: "uppercase",
        textAlignVertical: "center",
    }
})

export default OtherRoutinesCard;