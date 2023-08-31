import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './router/userR.js';
import cors from 'cors';

const app = express();

const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb://0.0.0.0/CRUD');
        console.log('Database connect');
    }catch(err){
        throw err;
    }
}

app.use(cors());
app.use(express.json());
app.use('/api/router/',UserRouter);



app.use((err,req,resp,next)=>{
    const errStatus = err.status || 500;
    const errMessage = err.message || 'Something getting error';
    return resp.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMessage,
        stack:err.stack
    })
})

app.listen(3001,()=>{
    console.log('Server conected');
    connectDB();
})