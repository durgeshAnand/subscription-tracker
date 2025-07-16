// console.log("wehjhbf gfhv");
import express from 'express';
import {PORT} from './config/env.js';  //importing environment variables

const app = express();  //initialize app

app.get('/',(req,res)=>{
    res.send("welcome to subscription tracker API");
});

app.listen(PORT,()=>{
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
});

export default app;