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