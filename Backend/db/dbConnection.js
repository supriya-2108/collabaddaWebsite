require('dotenv').config()
const mongoose=require('mongoose')
const connectDB= async()=>{
    try{
    await mongoose.connect(process.env.MONGO_DB_URI,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log('connected to mongoose')
    }   
    catch(err){
        console.log(err)
    } 
}

module.exports=connectDB;