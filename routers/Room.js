import express from 'express';

const rooms = [];

const roomRouter = express.Router();

roomRouter.get("/",(req,res) =>
{
    try{
        res.send({msg : 'Info about all the rooms', rooms});
    }
    catch(err){
        res.status(500).send({msg : "Internal server error"});
    }
});

roomRouter.post("/",(req,res) =>
    {
        const roominfo = {...req.body , id : Date.now().toString()};
        try{
            rooms.push(roominfo);
            res.send({msg : 'Room created successfully'});
        }
        catch(err){
            res.status(500).send({msg : "Internal server error"});
        }
    });

export default roomRouter;