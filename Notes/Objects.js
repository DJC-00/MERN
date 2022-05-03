// Example of passing a function as a function arugment
setTimeout(function() {
    console.log("start")
}, 3000);

console.log("end");

// setting a function name by using a variable
var exampleFunction = function(message) {
    console.log(message);
};

exampleFunction("Hello from exampleFunction");

// Calling a function inside of another function
function parentFunction(callback) {
    callback("information from the parent function");
}

parentFunction(exampleFunction);

parentFunction(function(message) {
    console.log(message);
});

// Callback functions will see a lot of use when:

// Some code needs to run after an event (user clicks a button, user visits "localhost:5000/home")
// Making API calls (it takes some time for the data to come back from another server or our own back-end server)
// Querying a database (it can take a while if queries are writing many rows or are joining many tables)

// \|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\| {_Freezing Objects_} |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|

// even though arr is declared with `const` we can still push new values into it 
const arr = [1, 2, 3, 4];
arr.push(300);

// we're no longer allowed to change `arr` because of the Object.freeze method
arr = Object.freeze([1, 2, 3, 4]);
arr.push(400);

// Editing frozen objects
const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

// If we decide that we need to add "thyme" to the list we can use spread to make a copy of the list and add "thyme" to it
const needThyme = [...groceryList, { "item": "thyme", "haveIngredient": false }];

// We can also use .concat() for this one. Concat is a method that essentially takes two arrays, glues them together and gives us back the new array.
const needBasil = groceryList.concat([{ "item": "basil", "haveIngredient": false }]);

// If we find that we already have "thyme" and we want to set the "haveIngredient" to true we can write something like...
const gotTheThyme = [...needThyme.slice(0, 5), {...needThyme[5], "haveIngredient": true }];

// If celery is "ingredient non grata", we could remove it also using slice...
const notNeceCelery = [...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3)];

// \|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\| {_Sorting_} |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);

// this will throw an error because the object is frozen
items.sort();

// Sort an array without altering the original, creates a copy of the original array and returns the sorted array
const sortedItems = [...items].sort();

// Sort does not work on numbers, to sort numbers use
// for Ascending order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return a - b });

// for Descending order
points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return b - a });

// \|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\| {_Map and Filter_} |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|

// map()
// map() applies a function to each element of an array

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];

// This will take a list of items and return an array of strings resembling html "list items"... 
// ["<li>pearl onions</li>", "<li>cremini mushrooms</li>", "<li>thyme</li>"]
const myGroceryList = groceries.map(item => `<li>${item}</li>`);

// We can also use map with an array of numbers
const mapValues = [1, 2, 3, 4, 5];
// This will create list of cubed numbers. [1, 8, 27, 64, 125]
const cubes = mapValues.map(val => val ** 3);

// filter() 
// filter() creates a conditional copy of an array where only certain values are copied from the original

const filterValues = [1, 2, 3, 4, 5];
// This will create a list of only the even values... [2, 4] if we wanted the odds we could get them by changing the === to !==
const evens = filterValues.filter(val => val % 2 === 0);

const gilterGroceries = ["pearl onions", "cremini mushrooms", "thyme"];
// If we want only the groceries that have the letter "o" in them we could write...
const oFoods = filterGroceries.filter(item => item.includes("o"));

// Using filter() with map() allows you to pick specific elements in an array, manipulate them, and copy them to a new array.
const filterMapValues = [1, 2, 3, 4, 5];
const oddCubes = filterMapValues.filter(val => val % 2 !== 0).map(val => val ** 3);

// \|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\| {_Currying_} |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|

// Currying is the idea that you only run part of a function, rather than the whole thing.
// Uncurried
function ninjaBelt(ninja, beltColor) {
    console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
}
ninjaBelt('Eileen', 'black');

// Curried
function ninjaBelt(ninja) {
    return function belt(beltColor) { //note the closure here!
        console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
    }
}
ninjaBelt('Eileen')('black'); //note the double invocation here.

// \|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\| {_Closures_} |\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|\|

// here we have a function called "Outer"
function outer() {
    let count = 0; // this is a count variable that is scoped to the function
    // there is an inner function that increments count and then console logs it
    function inner() {
        count++;
        console.log(count);
    }
    // we're returning the inner function
    return inner;
}

const counter = outer(); // counter is the function that we returned from calling the outer function
counter(); // this will console.log "1"
counter(); // this will console.log "2"
counter(); // this will console.log "3"
counter(); // this will console.log "4"

// so that means that the count variable still exists! 
// and it is being changed even though we aren't inside of the Outer function!
// can we access count out here?
console.log(count); // doesn't work!

// The count variable persists because it gets stored in the counter variable when the outer() function returns the inner() function