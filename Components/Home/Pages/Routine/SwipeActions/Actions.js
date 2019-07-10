import React from 'react';
import { color } from '../../../../config/colors';
import { fontSize } from '../../../../config/fontSize';
import { Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';

export const DeleteAction = ({ dragX, _pressDel }) => {
    const opacity = dragX.interpolate({
        inputRange: [0, 65],
        outputRange: [0, 1]
    })
    return (
        <Animated.View style={[{ opacity: opacity }, styles.deleteWorkoutRow]}>
            <TouchableOpacity onPress={_pressDel} style={{ flex: 1, height: "70%", alignContent: "center", backgroundColor: color.RED, justifyContent: "center" }}>
                <Text style={[fontSize.CARD_CONTENT, { color: color.WHITE, textAlign: "center" }]}>DELETE</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export const RightAction = ({ dragX, _pressAdd, _pressEdit }) => {
    const opacity = dragX.interpolate({
        inputRange: [-65, 0],
        outputRange: [1, 0]
    });
    return (
        <Animated.View style={[{ opacity: opacity }, styles.rightActionsRow]}>
            <TouchableOpacity onPress={_pressEdit} style={{ flex: 1, height: "70%", justifyContent: "center", backgroundColor: color.HIGHLIGHT }}>
                <Text style={[fontSize.CARD_CONTENT, { color: color.GREEN, textAlign: "center" }]}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_pressAdd} style={{ flex: 1, height: "70%", justifyContent: "center", backgroundColor: color.GREEN }}>
                <Text style={[fontSize.CARD_CONTENT, { color: color.HIGHLIGHT, textAlign: "center" }]}>ADD</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    // Start Swipe
    deleteWorkoutRow: {
        width: 80,
        height: "100%",
        marginRight: "-5%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    rightActionsRow: {
        width: 120,
        height: "100%",
        marginLeft: "-5%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
});