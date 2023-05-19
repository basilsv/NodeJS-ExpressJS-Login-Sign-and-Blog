import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/user-routes";
import blogRouter from './routes/blog-routes';
const app = express();

/*app.use("/api",(req,res,next)=>{
    res.send("Hello World!");
});*/
app.use(express.json())
app.use("/api/user",router);
app.use("/api/blog",blogRouter)
mongoose.connect('mongodb+srv://basilsv123:basilsv123@blogdb.degslc8.mongodb.net/?retryWrites=true&w=majority'
).then(()=>app.listen(5000))
.then(()=>
console.log("Connected To Database and Listening to Localhost 5000"))
.catch((err)=>console.log(err));

//app.listen(5000);
