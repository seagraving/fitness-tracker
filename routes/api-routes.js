const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
  console.log(req.body)
  Workout.create(req.body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log(params.id)
  console.log(body)
  Workout.findByIdAndUpdate({_id:params.id}, { $push: { exercises: body }  }, (error, workout) => {
    res.json(workout);
  })
   
});

router.get("/api/workouts/range", ({ body }, res) => {
  Workout.find({}).limit(7)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(workout => {
      return res.json(workout);
    })
    // .catch(err => {
    //   return res.status(400).json(err);
    // });
});

module.exports = router;