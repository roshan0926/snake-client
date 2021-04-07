const connect = function() {
  const net = require('net');
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: RNA');
    return;
  });
  conn.on('data', (message) => {console.log('you ded cuz you idled')})
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}
module.exports = connect;


// server.on('connection', (client) => {
//   console.log('New client connected!');
//   client.write('Hello there!');
// });