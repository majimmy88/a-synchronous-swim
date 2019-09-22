// /const keypressHandler = require('./js/keypressHandler');
const messages = []; // the storage unit for messages


module.exports.enqueue = (message) => {
  // keypressHandler.initialize(message)
  console.log(`Enqueing message: ${message}`);
  
  messages.push(message);
  console.log(messages);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};

module.exports.messages = () => {
  return messages;
}