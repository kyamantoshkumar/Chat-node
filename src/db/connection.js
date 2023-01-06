
const  mongoose = require ("mongoose");

 const connectDatabase = () => {
    mongoose.set('strictQuery', true);
  mongoose.connect("mongodb+srv://Mantosh:hellomongo@cluster0.vqogskc.mongodb.net/?retryWrites=true&w=majority/Real Time Chat Application")
    //  mongoose.connect("mongodb://localhost:27017/Real Time Chat Appliocation")
    .then((con) => {
      console.log(`MongoDb is Connected to ${con.connection.host}`);
    })
    .catch((e) => {
      console.log(`Error occured : ${e}`);
    });
 };

 

// const connectDatabase=()=>{
//     mongoose.set('strictQuery', true)
//     mongoose.connect("mongodb://localhost:27017/student", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }).then(() => {
//         console.log(`connection successfully`);
//     }).catch((e) => {
//         console.log(`no connection`, e);
//    })
// }

module.exports = connectDatabase



