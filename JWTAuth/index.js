import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

//postMess
import postMess from './routes/postMess.js';


//MiddleWare
import bodyParser from 'body-parser';
import cors from 'cors';
app.use(cors());
app.use(bodyParser.json());

//Import route
import authRouter from './routes/auth.js';
//Route middleware
app.use('/api/user', authRouter);
app.use('/api/posts', postMess);





//Mongoose
import mongoose from 'mongoose';

//Connect to DB 
mongoose.connect(process.env.DB_CONNECT, 
    { useNewUrlParser: true },
    () => console.log('connected to DB!')
);



app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(3002);