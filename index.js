

// const router = express("router")
const express = require("express");
const app = express();
const morgan = require('morgan')
const  mongoose = require ("mongoose");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
// const path = require('path')
const path = require("path")
var bodyParser = require("body-parser")
// const loginRouter = require("./routes/login")
// const userRouter = require("./src/routes/users")

const db = require("./src/db/connection.js")
app.use(cors());
// Router.use()
const mongo = require('mongodb').MongoClient;
// const client = require('socket.io').listen(4000).sockets;
const  usersRouter = require("./src/routes/users")

// import router file
const authRouter= require("./src/routes/auth")
app.use('/api', authRouter)

const { MongoClient, ServerApiVersion, Db } = require('mongodb');
const { addAbortSignal } = require("stream");
const { Router } = require("express");
const uri = "mongodb+srv://Mantosh:<password>@cluster0.vqogskc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => { 
const collection = client.db("test").collection("devices");
// perform actions on the collection object
client.close();
});

const api = process.env.PI_URL;
app.use(cors())
app.options("*", cors())

// middleware
app.use(express.json())
app.use(morgan("tiny"))

//errors
// app.use(notFoundMiddleware);
// app.use(errorHandlerMiddleware);

mongoose.set('strictQuery', false)
mongoose.connect(`${process.env.CONNECTION_URL}`,
{useNewUrlParser: true, useUnifieldToplogy: true, dbName: "Eshop"})
.then(() => { console.log("Database connection established")}
).catch((err) => {console.log("Error connecting")})
const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: false}))

const io = new Server(server, {
  cors: {
    proxy: "http://localhost:4000",
    methods: ["GET", "POST"],
  },
}); 

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

db();
server.listen(4000, () => {
  console.log("NODE SERVER RUNNING");
});


// index.post("/login", async(req, res) => {
//   try{
//      const addingLoginFile = new LoginFile(req.body)
//      console.log(req.body);
//      const insertLoginFile = await addingLoginFile.save()
//      res.send(insertlogin)
//     }catch(e){
//     res.send(e)
//   }
//   let options = {
//     uri: "http://[::1]:8000" + constants.PATH_TO_API,
//     // port:443,
//     method: 'POST',
//     json: json
// };
// })

// mongoose.connect("mongodb://localhost:27017/chatapplication", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() =>{
//  console.log('Database connected');
//  // if(!error){
//  // }
// }).catch(error=>{
//  console.log(error)
// })


// index.post("/login", async(req, res) => {
//   try{
//         const = new LoginFile({
//              "id" : 1,
//              "name" : "Mantosh",
//              "profile" : "mantosh@123"
//          })
//          adding.LoginFile.save();
//   }catch(e){

//   }
// })




