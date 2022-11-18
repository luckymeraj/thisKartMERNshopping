require('dotenv').config();
const mongoose=require('mongoose');

const connectDB=async()=>{
  try {
    // await mongoose.connect(process.env.MONGO_URI,{
        await mongoose.connect("mongodb+srv://luckymeraj:ddxm5r1j@my-this-kart-mern.9dofoo5.mongodb.net/?retryWrites=true&w=majority",{

        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
}
module.exports=connectDB;