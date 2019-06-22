import React, { Component } from 'react';
import Card from './Card';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';
// import RoutineBackArrow from '../../../../assets/RoutineBackArrow.png';
// import RoutineNextArrow from '../../../../assets/RoutineNextArrow.png';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';



class CurrentRoutine extends Component {
    isScrolled = (contentOffset) => {
        return contentOffset.x > 0;
    }

    render() {
        return (
            <View style={{ flex: .5, overflow: 'hidden', justifyContent: "center" }}>
                <View style={styles.currentRoutineContainer}>
                    <View style={{ borderBottomWidth: .75, borderBottomColor: color.HIGHLIGHT }}>
                        <Text style={[fontSize.SECTION_TITLE, styles.currentRoutineText]}>
                            CURRENT ROUTINE
                        </Text>
                    </View>

                    <ScrollView ref={(ref) => this._scrollRoutine = ref} onScroll={({ nativeEvent }) => { this.isScrolled(nativeEvent.contentOffset); }} horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={1}>
                        <Card date="Monday" workout="push" />
                        <Card date="Tuesday" workout="pull"/>
                        <Card date="Wednesday" workout="legs"/>
                        <Card date="Thursday" workout="break"/>
                        <Card date="Friday" workout="push"/>
                        <Card date="Saturday" workout="pull"/>
                        <Card date="Sunday" workout="legs"/>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    currentRoutineContainer: {
        height: 170,
        width: "90%",
        overflow: "visible",
        alignSelf: "center",
        flexDirection: "column",
    },
    currentRoutineText: {
        color: color.WHITE,
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
        // top: "50%",
        alignItems: "center",
        position: "absolute",
        justifyContent: "center",
    }
})

export default CurrentRoutine;