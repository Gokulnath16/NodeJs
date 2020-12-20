import express from 'express';
const app = express();
import mongoose from 'mongoose';
import 'dotenv/config.js';
import bodyParser from 'body-parser';
import cors from 'cors';

//MiddleWare
app.use(cors());
app.use(bodyParser.json());


//Import Routes 
import postsRoutes from './routes/posts.js';





app.use('/posts', postsRoutes);


//ROUTES
  app.get('/', (req, res) => {
    res.send('Hello World'); 
  });

  mongoose.connect( process.env.DB_CONNECTION, { useNewUrlParaser: true }, () => console.log('connected to DB'));


  app.listen(3001);

