const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
  day: {
    type: Date,
    default: Date.now
  },

  exercise: [
      {
        type: {
            type: String,
            trim: true,
            required: 'Enter type of exercise'
        },
        name: {
            type: String,
            trim: true,
            required: 'Enter the name of exercise'
        },
        duration: {
            type: Number,
            required: 'Enter exercise duration (minutes)'
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number
        }
    }
    ]
},
{
    toJSON: {
        virtuals: true
    }
}
);

workoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;