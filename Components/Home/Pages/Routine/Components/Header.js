import React from 'react';
import { color } from '../../../../config/colors';
import { fontSize } from '../../../../config/fontSize';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Header = (props) => {
    const { routineName } = props;

    return (
        <View style={styles.routineNameRow}>
            <View style={styles.routineNameCol}>
                <Text style={[styles.headerTitle, fontSize.CARD_TITLE]}>ROUTINE NAME</Text>
                <TextInput
                    maxLength={30}
                    numberOfLines={1}
                    defaultValue={routineName}
                    style={[styles.routineNameText, fontSize.SECTION_TITLE]}
                >
                </TextInput>
            </View>
            <View style={styles.routineNameCol}>
                <Text style={[styles.headerTitle, fontSize.CARD_TITLE]}>GOALS</Text>
                <TextInput
                    maxLength={60}
                    multiline={false}
                    numberOfLines={1}
                    placeholder="Optional"
                    placeholderTextColor={color.WHITE}
                    style={[styles.routineNameText, fontSize.SECTION_TITLE]}>
                </TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // Start Routine Name
    routineNameRow: {
        flex: .3,
        width: "90%",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        flexDirection: "column",
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
    routineNameCol: {
        flex: 1,
        width: "90%",
        borderRadius: 5,
        flexDirection: "column",
        justifyContent: "center"
    },
    headerTitle: {
        flex: .4,
        color: color.GREY
    },
    routineNameText: {
        width: "100%",
        color: color.WHITE,
        alignSelf: "center",
        textAlignVertical: "center"
    },
    // End Routine Name
})

export default Header;