const router = require("express").Router();
const Workout = require("../models/workout");


//get routes
router.get("/api/workouts", (req, res) => {
  Workout.find().then((data) => {
      res.json(data);
  })
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7).then((data) => {
        res.json(data);
    })
});

//post route
router.post("/api/workouts", (req, res) => {
    Workout.create({}).then((data) => {
        res.json(data);
    })
});

//put route
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    ).then(data => {
        res.json(data);
      })
});

module.exports = router;