import React from 'react';
import { connect } from 'react-redux';
import Day from '../../../Views/Day';
import { View, FlatList } from 'react-native';

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const getToday = () => {
    const date = new Date();

    return date.getDay();
}

// TODO: On click of Day open page containing Workout
const Week = (props) => {
    return (
        <View style={{ flex: .1, width: "90%", flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
            <FlatList
                data={days}
                numColumns="7"
                style={{ flex: 1 }}
                scrollEnabled={false}
                keyExtractor={(item, index) => item}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                renderItem={({ item, index }) => <Day isToday={getToday() === index} day={item} />}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Week);