import express from 'express'
import Workout from '../models/Workout.js'
import {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout} from '../controllers/workoutController.js'



const router=express.Router()

// GET all workouts
router.get('/',getWorkouts)


// GET a single workout
router.get('/:id',getWorkout)

// POST a single workout
router.post('/',createWorkout);

// DELETE a workout
router.delete('/:id',deleteWorkout)

// UPDATE a workout
router.patch('/:id',updateWorkout)


export default router;