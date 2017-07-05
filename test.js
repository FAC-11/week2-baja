var test = require('tape');
var todoFunctions = require('./logic');

test('Example test', function(t) {
  t.pass();
  t.end();
});

test('leave the input argument todos unchanged', function(t) {
  var expected = [];
  var todo = {
id: 0,
description: 'smash avocados',
done: true,
};
  var actual = todoFunctions.addTodo([], todo );
  t.deepEqual(actual, expected, "array should not be mutated");
  t.end();
});
