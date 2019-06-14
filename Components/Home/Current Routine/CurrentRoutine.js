import React, { Component } from 'react';
import Card from './Card';
import RoutineBackArrow from '../../../assets/RoutineBackArrow.png';
import RoutineNextArrow from '../../../assets/RoutineNextArrow.png';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const isScrolled = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return contentOffset.x > 0;
}

class CurrentRoutine extends Component {
    render() {
        return (
            <View style={styles.currentRoutineContainer}>
                <View style={{ borderBottomWidth: .75, borderBottomColor: "#D2D2D2" }}>
                    <Text style={styles.currentRoutineText}>
                        CURRENT ROUTINE
                    </Text>
                </View>

                <ScrollView ref={(ref) => this._scrollRoutine = ref} onScroll={({ nativeEvent }) => { this.isRoutineScrolled = isScrolled(nativeEvent); }} horizontal showsHorizontalScrollIndicator={false} snap>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ScrollView>

                {/* Left Arrow */}
                <TouchableOpacity style={styles.currentRoutineNextLeftContainer} onPress={() => this._scrollRoutine.scrollTo({ x: 0, y: 0 })}>
                    <Image source={RoutineBackArrow} style={{ width: 40, height: 40, alignSelf: "center" }} resizeMode="cover" />
                </TouchableOpacity>
                {/* Right Arrow */}
                <TouchableOpacity style={styles.currentRoutineNextRightContainer} onPress={() => this._scrollRoutine.scrollToEnd()}>
                    <Image source={RoutineNextArrow} style={{ width: 40, height: 40, alignSelf: "center" }} resizeMode="cover" />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    currentRoutineContainer: {
        height: 170,
        width: "80%",
        // marginTop: 40,
        overflow: "visible",
        alignSelf: "center",
        flexDirection: "column",
    },
    currentRoutineText: {
        fontSize: 14,
        color: "#313030",
        fontFamily: "Roboto-Medium",
    },
    currentRoutineNextLeftContainer: {
        left: -5,
        top: "50%",
        marginLeft: "auto",
        alignItems: "center",
        position: "absolute",
        justifyContent: "center",
    },
    currentRoutineNextRightContainer: {
        right: -5,
        top: "50%",
        alignItems: "center",
        position: "absolute",
        justifyContent: "center",
    }
})

export default CurrentRoutine;