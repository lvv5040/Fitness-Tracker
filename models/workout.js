const mongoose = require("mongoose");

const Collection = mongoose.Schema;

const workoutCollection = new Collection({
    day: {
        type: Date,
        default: () => new Date()
    },
    excerises: [
        {
            type: {
                type: String,
                required: "Missing excercise type, Please enter a type"
            },
            name: {
                type: String,
                required: "Missing excercise name, Please enter a name"
            },
            duration: {
                type: Number,
                required: "Missing excercise duration, Please enter a duration"
            },
            weight: {
                type: Number
            },
            reps: { 
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutCollection);

module.exports = Workout;