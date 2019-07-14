import React from 'react';
import { color } from '../config/colors';
import { View, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SwipeableCard = (props) => {
    const { children, isOvershootableLeft, isOvershootableRight, leftAction, rightAction,
        containerStyle } = props;
    return (
        <Swipeable
            style={styles.swipeContainer}
            renderLeftActions={leftAction}
            renderRightActions={rightAction}
            overshootLeft={isOvershootableLeft}
            overshootRight={isOvershootableRight}
        >
            <View style={[styles.viewContainer, containerStyle]}>
                {children}
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    swipeContainer: {
        flex: 1,
        overflow: "visible",
    },
    viewContainer: {
        flex: 1,
        height: 120,
        width: "90%",
        borderRadius: 5,
        paddingVertical: 10,
        alignSelf: "center",
        paddingHorizontal: 20,
        backgroundColor: color.SECONDARY_DARK,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    }
})

export default SwipeableCard;