const mongoose = require("mongoose")
const tmodel = require('../models/dbRooms');


//To creata a Group

const  createGroup = async (req,res)=>{
    const {name} = req.body
    try{
        const task  = await tmodel.create({name})
        res.status(201).json(task)
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

//To get all the group details

const getAllGroups= async (req,res)=>{
    try{
        const glg = await tmodel.find({});
        res.status(200).json(glg)
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

const getSingleRoom = async (req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"user not found"})
    }
    try{
        const sr = await tmodel.findById(id)
        res.status(200).json(sr)
    }catch(err){
        return res.status(404).json({message:err.message})
    }
}


module.exports = {createGroup,getAllGroups,getSingleRoom};