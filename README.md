# To Do List

## WHAT (describing your site)
Team BAJA are creating a todo list which allows users to remember tasks they need to do.

## WHY (describing the purpose)
We find that sometimes disorganised people want to:
* enter tasks they need to do into a web page so that they don't forget them
* view the tasks they have added in a list so that they can plan their day
* mark tasks as complete so that they can focus on the tasks they have left
So we wanted to create a user-friendly todo list app for these disorganised people.

## HOW (describing the journey to completion)
We did our project sequentially, focusing on the styling of the website as the last priority.
1. We started off with reading and understanding the problem, creating the file structure and raising basic issues that needed addressing.
2. Then we moved onto testing (adding to the logic.js functions iteratively throughout the process)
3. We then moved into combining the logic.js file with the dom.js file
4. After this was all working correctly we moved into the styling of the page

### TDD
The start journey involved: a git meltdown, not understanding how to write, git meltdown no.2...git meltdown no.3... and then BREAKTHROUGH.
We realised a few things that made testing a lot clearer:
* The `module.exports = ;` command has to link to the *actual* function in the js file
* You can create variables within the testing suite
* It's important to understand exactly what you are trying to test before writing **anything**

So **how** did we actually do it *(after the meltdowns)*?
1. We began by understanding exactly what we were trying to test
2. From this we made a 'failing' test. Trying to ensure the tests were readable and had logical descriptions to enable future readers to understand the though process. for example:
`$ test('should return an array', function(t) {
  var actual = Array.isArray(todoFunctions.deleteTodo([]));
  var expected = true;
  t.deepEqual(actual, expected, "deleteTodo function should return an array");
  t.end();
}) `
3. Watch it fail using tape ```$ node logic.test```
4. We then wrote the minimum amount of code required to make the single test pass
5. We then iterated this process adding tests building upon the next step in the logic
6. Upon having a working function and passing tests we then reviewed the code as a team and went through to refactor the code to ensure everything was clear and that all the functions were pure.

### DOM
#### Create to do node

#### Add to do form
We used the following logic:
1. We added an event listener which takes 'submit' as the event
2. We started by using ```event.preventDefault();``` to stop the submit event from refreshing the browser
3. We created a variable 'description' to match the input coming from the form
4. We then updated our 'newState' to call on the function 'addTodo' passing in 'state' *(current todo list)* and 'description' *(new todo which is to be added)*
5. Calliing `update(newState);` should now add the inputted string onto the page

### Styling

## Learning
* [To learn about Array.isArray()](https://www.w3schools.com/jsref/jsref_isarray.asp)

* [createElement and createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

* [Prepend node element](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend)

* [Remove Bullet Points](http://css.maxdesign.com.au/listutorial/02.htm)


### Bart
* Array.isArray
* good practise

### Alina

### Jen
* It's super easy to check if an array is an array using `Array.isArray()`. As the `typeof` function will always return an object when passed an array.
* Keeping variables within each individual test helps avoid errors
* If there are two Zooey's they are not necessarily the same Zooey.
*

### Aisha
