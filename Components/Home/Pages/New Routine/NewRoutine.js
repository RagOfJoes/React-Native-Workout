import React from 'react';
import NormalCard from './NormalCard';
import { connect } from 'react-redux';
import { color } from '../../../config/colors';
import { fontSize } from '../../../config/fontSize';
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';

const NewRoutine = (props) => {
    return (
        <ScrollView style={styles.NewRoutineWrapper} scrollEventThrottle={1}>
            <View style={styles.NewRoutineContainer}>
                <View style={styles.routineNameRow}>
                    <View style={styles.routineNameCol}>
                        <TextInput
                            maxLength={30}
                            numberOfLines={1}
                            placeholder="Routine Name"
                            placeholderTextColor={color.GREY}
                            style={[styles.routineNameText, fontSize.SECTION_TITLE]}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.routineNameCol}>
                        <TextInput
                            maxLength={60}
                            numberOfLines={2}
                            placeholder="Goals(Optional) "
                            placeholderTextColor={color.GREY}
                            multiline={true}
                            style={[styles.routineNameText, fontSize.SECTION_TITLE]}>
                        </TextInput>
                    </View>
                </View>
                <View style={styles.exercisesRow}>
                    <View style={styles.exercisesTitleCol}>
                        <Text style={[fontSize.SECTION_TITLE, styles.exercisesTitle]}>EXERCISES</Text>
                    </View>
                    <View style={styles.exercisesCardCol}>
                        <NormalCard />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    NewRoutineWrapper: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: color.PRIMARY_DARK
    },
    NewRoutineContainer: {
        flex: 1,
        height: "100%",
        paddingVertical: 30,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    // Start Routine Name
    routineNameRow: {
        flex: 1,
        height: 115,
        width: "90%",
        borderRadius: 5,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
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
    routineNameCol: {
        height: 35,
        width: "80%",
        borderRadius: 5,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 30,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: color.TERTIARY_DARK,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    routineNameText: {
        alignSelf: "center",
        color: color.WHITE,
        textAlignVertical: "center"
    },
    // End Routine Name

    // Start Exercises
    exercisesRow: {
        flex: 1,
        width: "90%",
        marginTop: 30,
        height: "100%",
        borderRadius: 5,
        paddingVertical: 15,
        alignItems: "center",
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
    },
    exercisesTitleCol: {
        flex: .25,
        height: 20,
        width: "100%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
    },
    exercisesTitle: {
        color: color.WHITE,
        textAlign: 'center'
    },
    exercisesCardCol: {
        flex: 1,
        marginTop: 10,
        width: "100%",
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
    }
    // End Exercises
})

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(NewRoutine);