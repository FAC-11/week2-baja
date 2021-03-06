// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo', done: false },
    { id: -2, description: 'second todo', done: false },
    { id: -1, description: 'third todo', done: false },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener


    // add span holding description
    if (todo.done) {
      var todoSpan = document.createElement('del');
    } else {
    var todoSpan = document.createElement('span')};
    todoNode.appendChild(todoSpan);
    var descriptionNode = document.createTextNode(todo.description);
    todoSpan.appendChild(descriptionNode);
    if (todo.done === true) {
      todoSpan.style.textDecoration = 'line-through';
      todoSpan.style.fontStyle = 'italic';
    }
    // this adds the delete button
    var deleteButtonNode = document.createElement('span');
    // var deleteButtonNode = document.createElement('i');
    // deleteButtonNode.classList.add('fa');
    // deleteButtonNode.classList.add('fa-trash-o');

    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);
    var deleteImage = document.createElement("i");
    deleteImage.classList.add('fa');
    deleteImage.classList.add('fa-trash-o');
    deleteButtonNode.appendChild(deleteImage);

    // add markTodo button

    var markTodoLabel = document.createElement('label');
    todoNode.prepend(markTodoLabel);
    var markTodoInput = document.createElement('input');
    markTodoLabel.appendChild(markTodoInput);
    markTodoInput.type = "checkbox";
    markTodoInput.checked = todo.done;
    var markTodoSpan = document.createElement('span');
    markTodoLabel.appendChild(markTodoSpan);
    var markImage = document.createElement("i");
    markImage.classList.add('fa');
    markImage.classList.add('fa-check');
    markTodoSpan.appendChild(markImage);
    markTodoInput.addEventListener('click', function(event){
        var newState = todoFunctions.markTodo(state, todo.id);
        update(newState);
    })




    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var description = event.target.firstElementChild.value; // event.target ....
      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, description); // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
