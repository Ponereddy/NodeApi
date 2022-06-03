const express= require("express");
const bodyParse= require("body-parser");
const morgan = require("morgan");
const connectDB= require("./database/connect");
connectDB();
const logger = require("./middleware/logger")
const app  = express();
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());
const routes=require("./routes.js")
const Port = process.env.PORT || 5000;
app.use(routes)
app.use(morgan('combined'))
app.get("/getUserDetails",(req,resp,next)=>{
    resp.send("Welcome to India ")
})

const server=app.listen(Port,(err,promise)=>{
  console.log("http://localhost:"+Port);
})
process.on("unHandleExceptions",()=>{
  console.log(`Error:${err.message}`);
  process.exit(1);
})