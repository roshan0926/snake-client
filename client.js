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
    // setInterval(() => {conn.write('Move: up')}, 50)
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


