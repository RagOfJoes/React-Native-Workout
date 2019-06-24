import React from 'react';
import { color } from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const Card = (props) => {
    const { containerStyle, addContStyle, isSwipeable, leftActions, rightActions, isTouchable, _press, children } = props;
    return (
        isTouchable ?
            <TouchableOpacity style={[addContStyle, containerStyle ? containerStyle : styles.cardContainer]} onPress={_press}>
                {children}
            </TouchableOpacity>
            :
            isSwipeable ?
                <Swipeable containerStyle={{ width: "100%", height: "100%", overflow: "visible" }} renderLeftActions={leftActions} renderRightActions={rightActions}>
                    <View style={[addContStyle, containerStyle ? containerStyle : styles.cardContainer]}>
                        {children}
                    </View>
                </Swipeable>
                :
                <View style={[addContStyle, containerStyle ? containerStyle : styles.cardContainer]}>
                    {children}
                </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        width: "90%",
        height: "100%",
        borderRadius: 5,
        flexDirection: "column",
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

export default Card;