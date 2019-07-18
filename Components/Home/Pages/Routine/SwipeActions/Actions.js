import React from 'react';
import { color } from '../../../../config/colors';
import { fontSize } from '../../../../config/fontSize';
import { Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';

export const DeleteAction = ({ dragX, _pressDel }) => {
    const opacity = dragX.interpolate({
        inputRange: [0, 60],
        outputRange: [0, 1]
    })
    return (
        <Animated.View style={[{ opacity: opacity, marginRight: "-5%" }, styles.singlActionRow]}>
            <TouchableOpacity onPress={_pressDel} style={styles.deleteWorkoutCol}>
                <Text style={[fontSize.CARD_CONTENT, { color: color.WHITE, textAlign: "center" }]}>DELETE</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export const AddAction = ({ dragX, progress, isLeft, _pressAdd }) => {
    const opacity = dragX.interpolate({
        inputRange: isLeft ? [0, 60] : [-65, 0],
        outputRange: isLeft ? [0, 1] : [1, 0]
    });
    return (
        <Animated.View style={[isLeft ? { marginRight: "-5%" } : { marginLeft: "-5%" }, { opacity: opacity }, styles.singlActionRow]}>
            <TouchableOpacity onPress={_pressAdd} style={styles.addActionCol}>
                <Text style={[fontSize.CARD_CONTENT, { color: color.WHITE, textAlign: "center" }]}>ADD</Text>
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
            <TouchableOpacity onPress={_pressEdit} style={styles.rightActionColOne}>
                <Text style={[fontSize.CARD_CONTENT, { color: color.SECONDARY_DARK, textAlign: "center" }]}>EDIT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={_pressAdd} style={styles.rightActionColTwo}>
                <Text style={[fontSize.CARD_CONTENT, { color: color.SECONDARY_DARK, textAlign: "center" }]}>ADD</Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    // Start Swipe
    singlActionRow: {
        width: 80,
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
    },
    deleteWorkoutCol: {
        flex: 1,
        height: "100%",
        marginBottom: 10,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: color.RED,
    },
    addActionCol: {
        flex: 1,
        height: "100%",
        marginBottom: 10,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: color.GREEN,
    },
    rightActionsRow: {
        width: 120,
        height: "100%",
        marginLeft: "-5%",
        flexDirection: "row",
        justifyContent: "center",
    },
    rightActionColOne: {
        flex: 1,
        height: "100%",
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.HIGHLIGHT
    },
    rightActionColTwo: {
        flex: 1,
        height: "100%",
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color.GREEN
    }
});