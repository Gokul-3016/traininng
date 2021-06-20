//for.in loop
let arr = [10, 20, 30, 40];
for (var index in arr) {
    console.log(index); // prints indexes: 0, 1, 2, 3

    console.log(arr[index]); // prints elements: 10, 20, 30, 40
}

//for.of loop
let str = "Hello World";
for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}

//functions
function Greet(greeting: string, name: string ) : string {
    return greeting + ' ' + name + '!';
}
var f=   Greet('Hello','Steve');//compiler shows error if improper  parameters are provided 
console.log(f);

//arrow functions
let sum = (x: number, y: number) => x + y;
var j=sum(3, 4);      //this allows the user to write function in single line which have one execution statememt
console.log(j)
//let Sum = function(x: number, y: number) : number
//{    return x + y; }

//function overloading
function add(a:string, b:string):string;
function add(a:number, b:number): number;
function add(a: any, b:any): any {
    return a + b;
}
var g= add("Hello ", "Steve"); console.log(g);
var h= add(10, 20);console.log(h);

//restparameters
function welcome(greeting: string, ...names: string[]) {//....names:string[] is the rest parameter,should be in the last .
    return greeting + " " + names.join(", ") + "!";
}
var p =welcome("Hello", "Steve", "Bill");console.log(p); 
var d= welcome("Hello");console.log(d); //returns only greeting parameter value -- hello