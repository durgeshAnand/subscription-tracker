// console.log("wehjhbf gfhv");
import express from 'express';

const app = express();  //initialize app

app.get('/',(req,res)=>{
    res.send("welcome to subscription tracker API");
});

app.listen(3000,()=>{
    console.log('Subscription Tracker API is running on http://localhost:3000');
});

export default app;