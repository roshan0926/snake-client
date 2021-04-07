const { keyInput }= require('./constants');

let connection;

const handleUserInput = (key, connection) => {
  if (key === "\u0003") {
    process.exit();
  }
  connection.write(keyInput[key]);
};
 

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key, connection);
  });
  return stdin;
}

module.exports = setupInput;