
const msgmodel = require('../models/dbMessages');

const createMessage = async (req,res) => {
    const {name,messages,timestamp, uid, roomId} = req.body
    try{
        const message = await msgmodel.create({name,  messages, timestamp, uid, roomId})
        res.status(201).json(message)
    }catch(err){
        res.status(400).json({error:err.message});
    }
}

const getRoomMessages = async (req, res) => {
    const { roomId } = req.params;
    try {
        const messages = await msgmodel.find({ roomId });
        res.status(200).json(messages);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}




module.exports ={createMessage, getRoomMessages};