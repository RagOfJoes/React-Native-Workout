import { color } from '../../config/colors';
import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    workoutCardContainer: {
        flex: .7,
        alignSelf: "center",
        flexDirection: "column",
    },
    workoutCardBackground: {
        width: "90%",
        height: "100%",
        borderRadius: 5,
        alignItems: "flex-start",
        flexDirection: 'column',
        backgroundColor: color.SECONDARY_DARK,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    workoutCardRow: {
        height: "100%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
    },
    // Start Title
    workoutCardTitle: {
        flex: .5,
        maxWidth: 115,
        maxHeight: "100%",
        textAlign: "center",
        paddingVertical: 15,
        alignItems: "center",
        borderTopLeftRadius: 5,
        justifyContent: "center",
        borderBottomLeftRadius: 5,
        backgroundColor: color.TERTIARY_DARK,
    },
    title: {
        color: color.GREY,
        textAlign: "center",
        textTransform: "uppercase",
    },
    workoutName: {
        color: color.WHITE,
        textAlign: "center",
        textTransform: "uppercase",
    },
    // End Title

    // Start Start Button
    startContainer: {
        bottom: 0,
        width: "100%",
        height: "18%",
        position: "absolute",
        justifyContent: "center",
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: color.HIGHLIGHT,
    },
    startText: {
        textAlign: "center",
        color: color.TERTIARY_DARK
    },
    // End Start Button

    // Start Empty Component
    emptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    emptyContent: {
        color: color.GREY,
        alignSelf: "center",
    },
    // End Empty Component

    // Start Muscle Group
    muscleContainer: {
        flex: 1 / 3,
        borderWidth: 1,
        borderRadius: 5,
        maxWidth: "33.34%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: color.SECONDARY_DARK,
        backgroundColor: color.TERTIARY_DARK,
        height: Dimensions.get("screen").height / 12, // approximate a square
    },
    muscleGroup: {
        flex: 1,
        margin: 5,
        flexDirection: "column"
    },
    // End Muscle Group
});

export default styles;