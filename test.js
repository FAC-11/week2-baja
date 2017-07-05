var test = require('tape');
var todoFunctions = require('./logic');

// test('Example test', function(t) {
//   t.pass();
//   t.end();
// });

//testing deleteTodo
//
var arr = [
 {
   id: 0,
   description: 'smash avocados',
   done: true,
 },
 {
   id: 1,
   description: 'make coffee',
   done: false,
 },
];

 test('should return an object', function(t){
  var actual= typeof todoFunctions.deleteTodo([]);
  var expected = "object";
  t.deepEqual(actual, expected, "deleteTodo function should return an array");
  t.end();
});

test('should return same list unchanged', function(t){
 var actual= todoFunctions.deleteTodo([]);
 var expected = [];
 t.deepEqual(actual, expected, "new list should remain unchanged");
 t.end();
});

test('remove the object with the idtodelete value', function(t){
 var actual= todoFunctions.deleteTodo(arr, 0);
 var expected = [
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
 ];;
 t.deepEqual(actual, expected, "deleteTodo function should remove the object with idToDelete value");
 t.end();
});

// //testing createtodo
//
// test('leave the input argument todos unchanged', function(t) {
//   var expected = [];
//   var todo = {
// id: 0,
// description: 'smash avocados',
// done: true,
// };
//   var actual = todoFunctions.addTodo([], todo );
//   t.deepEqual(actual, expected, "array should not be mutated");
//   t.end();
// });
