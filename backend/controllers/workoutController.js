import Workout from "../models/Workout.js";
import mongoose from 'mongoose';

//get all workouts
export const getWorkouts=async (req,res)=>{
    
    const workouts= await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(workouts)
}

//get single workout
export const getWorkout=async (req,res)=>{

    const id=req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Invalid id'})
    }


    const workout=await Workout.findById(id);

    if(!workout){
        return res.status(404).json({error: 'No workout exists'})
    }

    res.status(200).json(workout);
}


//create new workout
export const createWorkout=async (req,res)=>{
    const {title,load,reps}=req.body;
    
    try{
        const workout= await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(err){
        res.status(400).json({mssg: err.message});
    }
}

//delete a workout
export const deleteWorkout=async (req,res)=>{
    const id=req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Invalid id'})
    }

    const workout=await Workout.findOneAndDelete({_id:id});

    if(!workout){
        return res.status(404).json({error: 'No workout exists'})
    }

    res.status(200).json(workout);
}

//update a workout
export const updateWorkout=async (req,res)=>{
    const id=req.params.id;

    

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Invalid id'})
    }

    const workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error: 'No workout exists'})
    }

    res.status(200).json(workout);
}

