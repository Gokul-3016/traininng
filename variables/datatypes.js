//TUPLES
var employee = [1, "Steve"];
var person = [1, "Steve", true];
console.log(person);
var user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
console.log(user);
//add elements to tuples
var employe = [1, "Steve"];
employe.push(2, "Bill");
console.log(employe);
//unionype declaration
var code; //declaring two datatypes using or operator
code = 123;
console.log(code);
code = "ABC";
console.log(code);
//code = false; Compiler Error
var code1 = 123; // any keyword decribe variable can be any type based on the data
var employeeCode = code1; //asserting that result is number type
console.log(typeof (employeeCode));
var employee1 = {};
employee1.name = "John"; // TypeScript compiler will autocomplete Employee properties, but it won't show any compile time error if you forgot to add the properties.
employee1.code = 123;
console.log(employee1.name); //if no data provided it display undefined
