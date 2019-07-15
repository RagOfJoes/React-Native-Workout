import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { color } from '../config/colors';
import { fontSize } from '../config/fontSize';

const Day = (props) => {
    const { day, isToday, isMissed, isCompleted } = props;
    return (
        <View style={{ flex: .13, alignItems: "center", flexDirection: 'column' }}>
            <TouchableOpacity style={
                {
                    flex: .7,
                    width: "100%",
                    borderRadius: 10,
                    backgroundColor: isCompleted ? color.HIGHLIGHT : isToday ? color.WHITE : isMissed ? color.RED : color.GREY,
                    height: Dimensions.get("screen").width / 9, // approximate a square
                }}>
            </TouchableOpacity>
            <Text style={[fontSize.CARD_TITLE, { flex: .2, color: color.WHITE }]}>{day}</Text>
        </View>
    )
}

export default Day;