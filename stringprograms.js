var  txt1 = "hello";
var txt2 = "WORLD";
var txt3 ="     Welcome All";

//to change text to uppercase
 let res = txt1.toUpperCase();
 console.log("displaying the text in uppercase ",res);
 
 //to change text to lowercase
 let res1 = txt2.toLowerCase();
  console.log("displaying the text in lower case",res1);

 //to  assign a variable directly  in a sentence
 let res2 = `the given text are ${txt1} and ${txt2}`;
 console.log(res2);

 //to display a particular letter in a word
 console.log(txt1[3]);
 console.log(txt1.charAt(1));

 //to display only the selected letter in a word
 let res3=txt2.slice(2,4);
 console.log(res3);

 // to display the string in a arrays of string
 let res4 =txt2.split();
 console.log(res4);

 //to dispaly the datatype of variable
 console.log(typeof txt2);

 //to remove the white spaces in a string
 let res5 =txt3.trim();
 console.log(res5);
//to returns the position of the first occurrence of a specified value in a string.
 let res6 = txt3.indexOf("All");
 console.log(res6);

 //to return the strings between the given value
 let res7 = txt1.substr(1,4)
 console.log(res7);
 let res8 = txt2.substring(1,3);
 console.log(res8);

 //  to concatenating two strings
let res9 = txt1.concat(' ', txt2);
console.log(res9); 

//to replace a letter
let res10 = txt1 .replace("l","o");
console.log(res10);
let res11 = txt1.replaceAll("l","o");
//console.log(txt1.replaceAll("l","o"));
console.log(res11);