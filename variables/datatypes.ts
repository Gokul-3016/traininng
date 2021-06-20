
//TUPLES
var employee: [number, string] = [1, "Steve"];
var person: [number, string, boolean] = [1, "Steve", true];
console.log(person);
var user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable
console.log(user);

//add elements to tuples
var employe: [number, string] = [1, "Steve"];
employe.push(2, "Bill"); 
console.log(employe); 

//unionype declaration
let code: (string | number); //declaring two datatypes using or operator
code = 123;   console.log(code); 
code = "ABC"; console.log(code);
//code = false; Compiler Error


let code1: any = 123; // any keyword decribe variable can be any type based on the data
let employeeCode = <number>code1; //asserting that result is number type
console.log(typeof (employeeCode));

//Interfaces are used to define the structure of variables.
interface Employee {        
    name: string;
    code: number;
}
let employee1 = <Employee>{};
employee1.name = "John";  // TypeScript compiler will autocomplete Employee properties, but it won't show any compile time error if you forgot to add the properties.
employee1.code = 123;
console.log(employee1.name); //if no data provided it display undefined


