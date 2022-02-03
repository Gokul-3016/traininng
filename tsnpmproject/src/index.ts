


var ar = [0, 1, "test"];
ar.push("str")  //this is union type array can store any type of data

let code: any = 123; // any keyword decribe variable can be any type based on the data
let employeeCode = <number>code;
console.log(typeof (employeeCode));
//Interfaces are used to define the structure of variables.
interface Employee {        
    name: string;
    code: number;
}

let employee = <Employee>{};
employee.name = "John";  // TypeScript compiler will autocomplete Employee properties, but it won't show any compile time error if you forgot to add the properties.
employee.code = 123;
console.log(employee.name); //if no data provided it disapaly undefined

console.log("hello world");
console.log("right down");

//ternary operator condition
//syntax   --Boolean expression? First statement : second statement
let a: number = 10, b = 20;
a > b ? console.log('a is greater than b.') : console.log('a is less than b.')

//if conditions is similar to the js code
let x: number = 10, y = 20;
if (x > y) {
    console.log('x is greater than y.');
}
else if (x < y) {
    console.log('x is less than y.'); //This will be executed
}
else if (x == y) {
    console.log('x is equal to y');
}