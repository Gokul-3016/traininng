"use strict";
//for.in loop
var arr = [10, 20, 30, 40];
for (var index in arr) {
    console.log(index); // prints indexes: 0, 1, 2, 3
    console.log(arr[index]); // prints elements: 10, 20, 30, 40
}
//for.of loop
var str = "Hello World";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var char = str_1[_i];
    console.log(char); // prints chars: H e l l o  W o r l d
}
//functions
function Greet(greeting, name) {
    return greeting + ' ' + name + '!';
}
var f = Greet('Hello', 'Steve'); //compiler shows error if improper  parameters are provided 
console.log(f);
//arrow functions
var sum = function (x, y) { return x + y; };
var j = sum(3, 4); //this allows the user to write function in single line which have one execution statememt
console.log(j);
function add(a, b) {
    return a + b;
}
var g = add("Hello ", "Steve");
console.log(g);
var h = add(10, 20);
console.log(h);
//restparameters
function welcome(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names.join(", ") + "!";
}
var p = welcome("Hello", "Steve", "Bill");
console.log(p);
var d = welcome("Hello");
console.log(d); //returns only greeting parameter value -- hello
