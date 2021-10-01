const casual = require('casual');

// Generate random sentence
// You don't need function call operator here
// because most of generators use properties mechanism

casual.define('leader', function () {
  return {
    firstname: casual.first_name,
    lastname: casual.last_name,
    score: casual.integer(from = -1000, to = 1000),
    id: casual.uuid
  };
});

// Generate object with randomly generated fields
// var leader = casual.leader;

let leaders = [];
for (let i = 0; i < 20; i++) {
  leaders.push(casual.leader);
}

// And so on..
module.exports = () => {
  return {leaders}
}
