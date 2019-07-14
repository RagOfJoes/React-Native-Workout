import React from 'react';
import { connect } from 'react-redux';
import { color } from '../../../config/colors';
import createUID from '../../../config/createUID';
import { fontSize } from '../../../config/fontSize';
import SwipeableCard from '../../../Views/SwipeableCard';
import { DeleteAction, RightAction } from './SwipeActions/Actions';
import { addWorkout, delWorkout } from '../../../../Redux/Actions/routineAction';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';

const RoutineHeader = () => {
    return (
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
                    placeholder="Goals(Optional)"
                    placeholderTextColor={color.GREY}
                    style={[styles.routineNameText, fontSize.SECTION_TITLE]}>
                </TextInput>
            </View>
        </View>
    )
}

class Routine extends React.PureComponent {
    // Custom Render Function
    renderItem = (currentRoutine, currWorkouts, item) => {
        // Props
        const { Workouts, Exercises } = this.props;
        const { exercises } = Exercises;

        // Check if item is deleteable
        const isDeletable = currWorkouts.length > 1;

        // Retrieve workouts exercises
        const workoutExercises = Workouts.workouts[item].Exercises;
        const numOfExercises = workoutExercises.length - 1;

        // Creates a new set(Prevents duplicate Keys) w/ unique Muscle Types.
        const muscles = [...new Set(workoutExercises.map((exercise) => exercises[exercise].Type))];

        return (
            <SwipeableCard
                leftAction={(progress, dragX) =>
                    <DeleteAction
                        dragX={dragX}
                        progress={progress}
                        _pressDel={() => isDeletable ? this.props.dispatch(delWorkout(currentRoutine, item)) : null}
                    />
                }
                rightAction={(progress, dragX) =>
                    <RightAction
                        dragX={dragX}
                        progress={progress}
                        _pressAdd={() => this.props.dispatch(addWorkout(currentRoutine, `Workout ${createUID()}`))}
                        _pressEdit={() => this.props.navigation.navigate("Workout", { workout: item })}
                    />
                }
                containerStyle={{ flexDirection: "column" }}
            >
                <View style={styles.workoutColOne}>
                    <View style={{ flex: .2, height: "100%", alignItems: "center", justifyContent: "center" }}>
                        <View style={{ width: 45, height: 45, borderRadius: 45 / 2, backgroundColor: color.WHITE }}></View>
                    </View>
                    <TextInput
                        maxLength={60}
                        numberOfLines={1}
                        autoCapitalize="characters"
                        defaultValue={item.toUpperCase()}
                        style={[{ flex: .75, height: "100%", color: color.WHITE, }, fontSize.SECTION_TITLE]}>
                    </TextInput>
                </View>
                <View style={styles.workoutColOne}>
                    <View style={{ flex: .5, flexDirection: "column", justifyContent: "center" }}>
                        <Text style={[{ flex: 1, color: color.GREY }, fontSize.CARD_TITLE]}>EXERCISES</Text>
                        <Text style={[{ flex: 1, color: color.WHITE }, fontSize.CARD_TITLE]}>{numOfExercises}</Text>
                    </View>
                    <View style={{ flex: .5, flexDirection: "column", justifyContent: "center" }}>
                        <Text style={[{ flex: 1, color: color.GREY }, fontSize.CARD_TITLE]}>MUSCLES</Text>
                        <Text style={[{ flex: 1, color: color.WHITE }, fontSize.CARD_TITLE]}>{muscles}</Text>
                    </View>
                </View>
            </SwipeableCard>
        )
    }

    render() {
        const { props } = this;
        const { routines, currentRoutine } = props.Routines;
        const { Workouts } = routines[currentRoutine];

        return (
            <View style={styles.RoutineWrapper} >
                <View style={styles.RoutineContainer}>
                    <RoutineHeader />
                    {/* Start Workouts Card */}
                    <View style={styles.workoutRow}>
                        <View style={styles.workoutTitleCol}>
                            <Text style={[fontSize.SECTION_TITLE, styles.workoutTitle]}>WORKOUTS</Text>
                        </View>
                        <FlatList
                            numColumns="1"
                            data={Workouts}
                            style={{ flex: 1 }}
                            extraData={Workouts}
                            overScrollMode="never"
                            keyExtractor={(item, index) => `${currentRoutine}-${item}-${index}`}
                            renderItem={({ item, index }) =>
                                this.renderItem(currentRoutine, Workouts, item)
                            }
                        />
                    </View>
                    {/* End Workouts Card */}
                    <View style={styles.saveRow}>
                        <TouchableOpacity style={styles.saveCol}>
                            <Image style={{ width: 60, height: 60 }} source={require('../../../../assets/Save.png')} resizeMode="cover"></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    RoutineWrapper: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: color.PRIMARY_DARK
    },
    RoutineContainer: {
        flex: 1,
        height: "100%",
        paddingVertical: 30,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-evenly",
    },
    // Start Routine Name
    routineNameRow: {
        flex: .4,
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
        width: "100%",
        marginTop: 30,
        height: "100%",
        borderRadius: 5,
        justifyContent: "center",
        paddingVertical: 15,
        flexDirection: "column",

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
        flex: .1,
        height: 20,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
    },
    workoutTitle: {
        width: "100%",
        color: color.WHITE,
        textAlign: 'center'
    },
    workoutColOne: {
        flex: .5,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    // End Exercises
    saveRow: {
        width: "90%",
        marginTop: 15,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    saveCol: {
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    }
})

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Routine);