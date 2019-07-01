import React from 'react';
import { View } from 'react-native';
import WorkoutCard from '../../Pages/New Routine/Workouts/WorkoutCard';

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
            // {
            //     Type: "Chest",
            //     Name: "Incline Bench Press"
            // },
            // {
            //     Type: "Chest",
            //     Name: "Landmine Press"
            // },
            // {
            //     Type: "Chest",
            //     Name: "Dips"
            // },
            // {
            //     Type: "Chest",
            //     Name: "Chest Flyes"
            // },
            // {
            //     Type: "Arms",
            //     Name: "Tricep Extensions"
            // }
        ]
    }
];

const NextWorkout = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <WorkoutCard workoutName={data[0].Name} exercises={data[0].Exercises} isEditing={false} />
        </View>
    )
}

export default NextWorkout;