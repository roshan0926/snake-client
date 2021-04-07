const connect = function() {
  const net = require('net');
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  
  conn.on('connect', () => {
    // let spaced = 50
    console.log('Successfully connected to game server');
    conn.write('Name: RNA');
    // for (let i = 0; i < 10; i++){
    setInterval(() => {conn.write('Move: up')}, 50)
    // spaced +=50
    // conn.write("Move: up")
    return;
  });
  conn.on('data', (message) => {console.log('you ded cuz you idled')})
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = connect;

// let spaced = 100;

// for (const i of spinner) {
//   setTimeout(() => {
//     process.stdout.write(i);
//   }, spaced)
//   spaced += 200;
// }

// server.on('connection', (client) => {
//   console.log('New client connected!');
//   client.write('Hello there!');
// });

// for (let i in sentence) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i])
//   },50 * i);
// };
