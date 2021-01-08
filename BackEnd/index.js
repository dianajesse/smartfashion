const express = require('express')
const bodyParser=require('body-Parser');
const mongoose=require('mongoose');
const cors = require('cors');
const morgan =require('morgan')

const app = express();

const config ={
    useNewUrlParser:true,
    useUnifiedTopology:true
}
require('dotenv').config();



mongoose.connect(process.env.MONGODB_URI,config).then(()=>{
    console.log("Successfully connected to MongoDB")
})
.catch(err=>{
    console.error("Some problem occured",err)
})

app.use(bodyParser.json());

app.get('/',(request,response)=>{
    response.send('Hello World')
});


app.use('/user',require('./routes/authRoute'));


app.listen(process.env.PORT,()=>{
    console.log("Express app is working")
})