// const http = require('http');
// const app = expess();
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Context-Type', 'text/plan');
//     res.end('Hello Word \n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// // const mango = require('mongodb').MongoClient;
// const client = require('socket.io').listen(4000).sockets

// mango.connect('mongo://127.0.0.1/mongochat', function(err, db) {
//     if(err) {
//         throw err;
//     }
//     console.log('MongoDB connected...');
//    // Connection to socket.io
//     client.on('connection', function(){
//         let chat = db.collection('chats');
//        // Craete function to send status
//         sendStatus = function(s){
//             socket.emit('status',s);
//         }
//          // Get chats from mango collection
//         chat.find().limit(100).sort({_id:1}).toArray(function(err, res){
//             if(err) {
//                 throw err;
//             }
//             socket.emit('output', res)
//         });
//         // Handle input events
//         socket.on('input', function(data) {
//             let name = data.name;
//             let message = data.message;

//             // Checks 
//             if(name == '' || message == '') {
//                  // send error status
//                  sendStatus('Please enter a name and message')
//             }else{
//                 // Insert Message
//                 chat.insert({name: name, mesage: message}, function() {
//                     client.emit('output',[data]);

//                     //Send status object
//                     sendStatus({
//                         message: 'Message sent',
//                         clear: true
//                     });
//                 });
//             }
//         });
//     });
//        socket.on('clear', function(data){
//         // Remove all chats from collection 
//         chat.remove({}, function() {
//             // Emit cleare
//             socket.emit('cleared')
//         });
//        });
// });