#To Do List

## WHY (describing the purpose)
Team BAJA are creating a todo list which allows users to remember tasks they need to do.
We find that sometimes disorganised people want to:
* enter tasks they need to do into a web page so that they don't forget them
* view the tasks they have added in a list so that they can plan their day
* mark tasks as complete so that they can focus on the tasks they have left
So we wanted to create a user-friendly todo list app for these disorganised people. 

## WHAT (describing your site)

## HOW (describing the journey to completion)
### TDD
The start journey involved: a git meltdown, not understanding how to write, git meltdown no.2...git meltdown no.3... and then BREAKTHROUGH.
We realised a few things that made testing a lot clearer:
* The `module.exports = ;` command has to link to the *actual* function in the js file
* You can create variables within the testing suite
* It's important to understand exactly what you are trying to test before writing **anything**

So **how** did we actually do it *(after the meltdowns)*?
1. We began by understanding exactly what we were trying to test
2. From this we made a 'failing' test. Trying to ensure the tests were readable and had logical descriptions to enable future readers to understand the though process. for example:
**copy example here**
3. Watch it fail using tape ```$ node logic.test```
4. We then wrote the minimum amount of code required to make the single test pass
5. We then iterated this process adding tests building upon the next step in the logic
6. Upon having a working function and passing tests we then reviewed the code as a team and went through to refactor the code to ensure everything was clear and that all the functions were pure.

### DOM

## Learning
[To learn about Array.isArray()](https://www.w3schools.com/jsref/jsref_isarray.asp)
[]()
[]()
[]()
[]()

### Bart
* Array.isArray
* good practise

### Alina

### Jen
* It's super easy to check if an array is an array using `Array.isArray()`. As the `typeof` function will always return an object when passed an array.
* Keeping variables within each individual test helps avoid errors
* If there are two Zooey's they are not necessarily the same Zooey.

### Aisha
