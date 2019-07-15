import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';

// TODO: Fetch from Redux
const UserProgress = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={[fontSize.CARD_TITLE, styles.title]}>CURRENT WEIGHT</Text>
                    <Text style={[fontSize.CARD_CONTENT, styles.text]}>150 lbs</Text>
                </View>
                <View style={styles.colMiddle}>
                    <Text style={[fontSize.CARD_TITLE, styles.title]}>WEIGHTS LIFTED</Text>
                    <Text style={[fontSize.CARD_CONTENT, styles.text]}>3.8k lbs</Text>
                </View>
                <View style={styles.col}>
                    <Text style={[fontSize.CARD_TITLE, styles.title]}>LAST WORKOUT</Text>
                    <Text style={[fontSize.CARD_CONTENT, styles.text]}>1 day ago</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: .2,
        width: "90%",
        alignSelf: "center",
        justifyContent: "center"
    },
    row: {
        flex: .9,
        height: "90%",
        // alignItems: "center",
        flexDirection: "row",
    },
    col: {
        flex: .8,
        height: "70%",
        justifyContent: "center",
    },
    colMiddle: {
        flex: .8,
        height: "70%",
        borderLeftWidth: .25,
        borderRightWidth: .25,
        justifyContent: "center",
        borderLeftColor: color.WHITE,
        borderRightColor: color.WHITE
    },
    title: {
        color: color.GREY,
        textAlign: "center",
    },
    text: {
        color: color.WHITE,
        textAlign: "center"
    }
})

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(UserProgress);