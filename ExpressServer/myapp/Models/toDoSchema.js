const mongoose = require ("mongoose");

var toDoSchema = {
  toDo: String,
  complete: Boolean
}

var toDo = mongoose.model('todos', toDoSchema);

module.exports = toDo
