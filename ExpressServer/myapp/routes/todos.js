var express = require('express');
var router = express.Router();

var toDo = require('../Models/toDoSchema.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //todo.Find({<whatever key you want to search by>:<whatever you want to search by>})  this will return ALL matches Found
  //todo.FindOne({<whatever key>:<whatever value>}) this will return the FIRST match it finds
  toDo.find((err, result) => {
    if(err){
      return next(err);
    }
    return res.json({payload: result});
  });
});

router.post('/', (req, res)=> {
let newToDo = new toDo(req.body);
  newToDo.save(function(err, doc){
    if (err){
      return res.json({error:err});
    }
      return res.json({payload:doc});
  });
});

router.patch('/:id', function(req, res) {
var id = req.params.id;
console.log(req.body)
var newDone = req.body.complete;
var updateData = {done:newDone};
console.log(updateData);
toDo.findOneAndUpdate({id:id}, {$set:updateData}, function(err, result) {
  if (err){
    return res.json({error:err});
  }
    return res.json({payload:result});
});
});





module.exports = router;
