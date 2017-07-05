var test = require('tape');
var todoFunctions = require('./logic');

//addTodo Tests
var todo = {
            description: 'smash avocados',
            done: true,
            };
var todoWithId = {
            id: 0,
            description: 'smash avocados',
            done: true,
            };

var todoDoneFalse = {
            id: 0,
            description: 'smash avocados',
            done: false,
            };

test('leave the input argument todos unchanged', function(t) {
  var expected = [];
  todoFunctions.addTodo(expected, todo );
  t.deepEqual(expected, [], "array should not be mutated");
  t.end();
});

test('returns a new array ith the new Todo added to the end', function(t) {
  var expected = [todo];
  var actual = todoFunctions.addTodo([], todo );
  t.deepEqual(actual, expected, "new todo object is added to array");
  t.end();
});

test('new to do object should be given an id', function(t) {
  var expected = true;
  var actual = todoFunctions.addTodo([], todo )[0].hasOwnProperty('id');
  t.equal(actual, expected, "object should have an id property");
  t.end();
});

//markTodo Tests
test('should leave the input argument todos unchanged', function(t) {
  var expected = [];
  todoFunctions.markTodo(expected, todo );
  t.deepEqual(expected, [], "input argument todos should be unchanged");
  t.end();
});

test('in the new todo array, all elements will remain unchanged except the one with id: idToMark', function(t) {
  var expected = [todoDoneFalse];
  var todoList = [todoWithId];
  var actual = todoFunctions.markTodo(todoList, 0 );
  t.deepEqual(expected, actual, "the done value of the object with the specified id should be toggled");
  t.end();
});
