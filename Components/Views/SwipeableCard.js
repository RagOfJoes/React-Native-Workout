import React from 'react';
import { color } from '../config/colors';
import { View, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SwipeableCard = (props) => {
    const { children, isOvershootableLeft, isOvershootableRight, leftAction, rightAction, containerStyle } = props;
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
    },
    viewContainer: {
        flex: 1,
        height: 120,
        width: "90%",
        borderRadius: 5,
        overflow: "visible",
        paddingVertical: 10,
        alignSelf: "center",
        paddingHorizontal: 20,
        backgroundColor: color.SECONDARY_DARK,
    }
})

export default SwipeableCard;