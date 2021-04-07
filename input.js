let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  connection.write(key);
  if (key === 'w') {
    connection.write("Move: up")
  }
  if (key === 'a') {
    connection.write("Move: left")
  }
  if (key === 's') {
    connection.write("Move: down")
  }
  if (key === 'd') {
    connection.write("Move: right")
  }
  if (key === 'q') {
    connection.write("Say: Hey, whats up")
  }
  if (key === 'e') {
    connection.write("Say: assassination attempt?")
  }
  if (key === 'r') {
    connection.write("Say: close call")
  }
  if (key === 't') {
    connection.write("Say: Well played")
  }
  if (key === 'g') {
    connection.write("Say: GG")
  }
}
 

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
}

module.exports = setupInput;

