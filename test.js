var test = require('tape');
var todoFunctions = require('./logic');

//tests for id to delete

var arr = [{
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

test('should return an array', function(t) {
  var actual = Array.isArray(todoFunctions.deleteTodo([]));
  var expected = true;
  t.deepEqual(actual, expected, "deleteTodo function should return an array");
  t.end();
});

test('should not mutate original todo list', function(t) {
  var actual = [{
    id: 0,
    description: 'smash avocados',
    done: true
  }];
  var expected = [{
    id: 0,
    description: 'smash avocados',
    done: true
  }];
  todoFunctions.deleteTodo(actual);

  t.deepEqual(actual, expected, "original list should not be mutated");
  t.end();
});

test('Should remove the object with the idtodelete value', function(t) {
  var arr = [{
      id: 0,
      description: 'smash avocados',
      done: true
    },
    {
      id: 1,
      description: 'make coffee',
      done: false
    }
  ];

  var expected = [{
    id: 1,
    description: 'make coffee',
    done: false
  }];

  var actual = todoFunctions.deleteTodo(arr, 0);
  t.deepEqual(actual, expected, "delete todo reduces array length by one");
  t.end();
});

//addTodo Tests
// need to pass in a description string not object
test('leave the input argument todos unchanged', function(t) {
  var description = "smash avocados";
  var actual = [];
  var expected = [];
  todoFunctions.addTodo(actual, description);
  t.deepEqual(actual, expected, "array should not be mutated");
  t.end();
});

// should b
test('should return a new array with the new Todo added to the end', function(t) {
  var todo = {
    id: 2,
    description: "smash avocados",
    done: false
  };
  var description = "smash avocados";
  var expected = [todo];
  var actual = todoFunctions.addTodo([], description);
  // manually changing id due to generateId being random
  actual[0].id=2;
  t.deepEqual(actual, expected, "new todo object is created and added to the array");
  t.end();
});

test('New todo object should have id property', function(t) {
  var description = "smash avocados";
  var expected = true;
  var actual = todoFunctions.addTodo([], description)[0].hasOwnProperty('id');
  t.equal(actual, expected, "New todo object should have id property");
  t.end();
});

test('should return object with a done property',function(t){
  var description= "avocados";
  var expected = true;
  var actual = todoFunctions.addTodo([], description)[0].hasOwnProperty('done');
  t.equal(actual, expected, "the new todo object should have a done property");
  t.end();
});

// //markTodo Tests
test('should leave the input argument todos unchanged', function(t) {
  var todoWithId = {
    id: 0,
    description: 'smash avocados',
    done: true,
  };

  var actual = [todoWithId];
  var expected = [todoWithId];
  todoFunctions.markTodo(actual, 0);
  t.deepEqual(actual, expected, "input argument todos should be unchanged");
  t.end();
});

test('in the new todo array, all elements will remain unchanged except the one with id: idToMark', function(t) {
  var todoDoneTrue = {
    id: 0,
    description: 'smash avocados',
    done: true,
  };
  var todoDoneFalse = {
    id: 0,
    description: 'smash avocados',
    done: false,
  };
  var toDoOther = {
    id: 1,
    description: 'eating bananas',
    done: false
  };
  var expected = [ todoDoneTrue, toDoOther ];
  var todoList = [ todoDoneFalse, toDoOther ];
  var actual = todoFunctions.markTodo(todoList, 0);
  t.deepEqual(actual, expected, "the done value of the object with the specified id should be toggled");
  t.end();
});
