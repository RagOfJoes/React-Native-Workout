import React from 'react';
import { connect } from 'react-redux';
import { color } from '../../../config/colors';
import WorkoutCard from './Workouts/WorkoutCard';
import { fontSize } from '../../../config/fontSize';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, TextInput, StyleSheet } from 'react-native';

const templateData = {
    Name: "",
    Exercises: []
}

const data = [
    {
        Name: "Push",
        Exercises: [
            {
                Type: "Chest",
                Name: "Bench Press"
            },
            {
                Type: "Shoulders",
                Name: "Military Press"
            },
            {
                Type: "Chest",
                Name: "Incline Bench Press"
            },
            {
                Type: "Chest",
                Name: "Landmine Press"
            },
            {
                Type: "Chest",
                Name: "Dips"
            },
            {
                Type: "Chest",
                Name: "Chest Flyes"
            },
            {
                Type: "Arms",
                Name: "Tricep Pull Downs"
            }
        ]
    },
    // {
    //     Name: "Pull",
    //     Exercises: [
    //         {
    //             Type: "Back",
    //             Name: "Pullups",
    //         }
    //     ]
    // },
    // {
    //     Name: "Legs",
    //     Exercises: [
    //         {
    //             Type: "Legs",
    //             Name: "Squats"
    //         }
    //     ]
    // }
];

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
                            multiline={true}
                            numberOfLines={2}
                            placeholder="Goals(Optional) "
                            placeholderTextColor={color.GREY}
                            style={[styles.routineNameText, fontSize.SECTION_TITLE]}>
                        </TextInput>
                    </View>
                </View>
                {/* Use SectionList instead of nesting Flatlists */}
                <View style={styles.workoutRow}>
                    <View style={styles.workoutTitleCol}>
                        <Text style={[fontSize.SECTION_TITLE, styles.workoutTitle]}>WORKOUTS</Text>
                    </View>
                    <FlatList
                        data={data}
                        numColumns="1"
                        extraData={data}
                        style={{ flex: 1, width: "100%" }}
                        keyExtractor={(item, index) => item.Name}
                        renderItem={({ item, index }) =>
                            <WorkoutCard
                                key={index}
                                isEditing={true}
                                workoutName={item.Name}
                                exercises={item.Exercises}
                                _pressAdd={() => { data.push(templateData); console.log(data) }}
                            />
                        }
                    />
                </View>
                {/* <View style={styles.saveRow}> */}
                <TouchableOpacity style={styles.saveCol}>
                    {/* <Image style={{ width: 40, height: 40 }} source={require('../../../../assets/Save.png')} resizeMode="contain" /> */}
                    <Text style={{ fontSize: 35, color: color.WHITE }}>✓</Text>
                </TouchableOpacity>
                {/* </View> */}
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
        paddingHorizontal: 15,
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
        width: "100%",
        color: color.WHITE,
        alignSelf: "center",
        textAlignVertical: "center"
    },
    // End Routine Name

    // Start Exercises
    workoutRow: {
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
    workoutTitleCol: {
        flex: .25,
        height: 20,
        width: "100%",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
    },
    workoutTitle: {
        width: "100%",
        color: color.WHITE,
        textAlign: 'center'
    },
    workoutCardCol: {
        flex: 1,
        marginTop: 10,
        width: "100%",
        overflow: "hidden",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
        // backgroundColor: "red"
    },
    // End Exercises
    saveRow: {
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    saveCol: {
        width: 56,
        right: 30,
        bottom: 0,
        height: 56,
        borderRadius: 50,
        position: "absolute",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        backgroundColor: color.GREEN
    }
})

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(NewRoutine);