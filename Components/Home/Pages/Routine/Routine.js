import React from 'react';
import { connect } from 'react-redux';
import { color } from '../../../config/colors';
import createUID from '../../../config/createUID';
import { fontSize } from '../../../config/fontSize';
import Swipeable from 'react-native-gesture-handler/Swipeable';
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
    renderItem = (currentRoutine, Workouts, item) => {
        const isDeletable = Workouts.length > 1;

        return (
            <Swipeable overshootLeft={false} overshootRight={false} containerStyle={{ flex: 1, marginBottom: 10, overflow: "visible" }}
                renderLeftActions={(progress, dragX) =>
                    <DeleteAction
                        dragX={dragX}
                        progress={progress}
                        _pressDel={() => isDeletable ? this.props.dispatch(delWorkout(currentRoutine, item)) : null}
                    />
                }
                renderRightActions={(progress, dragX) =>
                    <RightAction
                        dragX={dragX}
                        progress={progress}
                        _pressAdd={() => this.props.dispatch(addWorkout(currentRoutine, `Workout ${createUID()}`))}
                        _pressEdit={() => this.props.navigation.navigate("Workout", { workout: item })}
                    />
                }
            >
                <View style={styles.workoutCardCol}>
                    <TextInput maxLength={60} defaultValue={item} style={[styles.workoutCardText, fontSize.SECTION_TITLE]} />
                </View>
            </Swipeable>
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
                            overScrollMode="never"
                            extraData={Workouts}
                            style={{ flex: 1, width: "100%" }}
                            keyExtractor={(item, index) => `${currentRoutine}-${item}-${index}`}
                            renderItem={({ item, index }) =>
                                this.renderItem(currentRoutine, Workouts, item, index)
                            }
                        />
                    </View>
                    {/* End Workouts Card */}
                    <View style={styles.saveRow}>
                        <TouchableOpacity style={styles.saveCol}>
                            <Image style={{ width: 60, height: 60}} source={require('../../../../assets/Save.png')} resizeMode="cover"></Image>
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
        width: "90%",
        marginTop: 30,
        height: "100%",
        borderRadius: 5,
        paddingVertical: 15,
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
    workoutCardCol: {
        width: "90%",
        height: "100%",
        borderRadius: 5,
        paddingVertical: 20,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

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
    workoutCardText: {
        height: 40,
        width: "90%",
        borderRadius: 5,
        color: color.WHITE,
        paddingHorizontal: 10,
        textAlignVertical: "center",
        backgroundColor: color.TERTIARY_DARK
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

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Routine);