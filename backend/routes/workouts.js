import express from 'express'


const router=express.Router()

// GET all workouts
router.get('/',(req,res)=>{
    res.json({mssg: 'Get all workouts'})
})


// GET a single workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get single workout'})
})

// POST a single workout
router.post('/',(req,res)=>{
    res.json({mssg: 'Post a single workout'});
})

// DELETE a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg: 'Delete a single workout'});
})

// UPDATE a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg: 'Update a single workout'});
})


export default router;