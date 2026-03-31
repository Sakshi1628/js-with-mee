"use strict"; // trest all js code as newer version

//alert("hello") // we are using nodejs, not browser
 console.log(3
    +3) // code readability should be high
 console.log("sakshi")
 

//  primitive datatypes
//1)number=> 2 to power 53
//2)bigint
//3)string=>""
//4) boolean=> true/false
//5) null=> it is a standalone value,it is a representation of empty value.
//6) undefined=> no value assigned
//7) symbol=> whenever we are talking about unique then we talk about symbols.

// object

console.log(typeof "sakshi");
console.log(typeof null); //type of this is object
console.log(typeof undefined);


//proper definations

//1)Number:The Number datatype in javascript includes both integers and floating points numbers.Special values like infinity,-infinity and NaN represent infinite values and computational errors.
let n1 = 2;
console.log(n1)

let n2 = 1.3;
console.log(n2)

let n3 = Infinity;
console.log(n3)

let n4 = 'something here too' / 2;
console.log(n4)

//2)String:A string in js is series of characters that are enclosed in quotes.There are three types of quotes in js
let s1 = "Hello There";
console.log(s1); 

let s2 = 'Single quotes work fine';
console.log(s2); 

let s3 = `can embed ${s1}`;
console.log(s3);

//3)Boolean:The Boolean has only two type of values i.e true or false 
let b1 = true;
console.log(b1);  

let b2 = false;
console.log(b2);

//4)Null:The special null value does not belong to any of the default datatyepes.It forms a seperate type of its own which contains only the null value or empty value.
let age = null;
console.log(age)

//5)Undefined:A variable that has been declared but not initialized with a value is automatically assigned the undefined value . It means that the variable exists ,but it has no value assigned to it.
let a;
console.log(a);

//6)Symbols:(introduced in ES6) They are unique and immutable primitive values used as identifiers for object properties.They help to create unique key in objects,preventing conflict with other proprties.

let r1 = Symbol("Sakshi");
let r2 = Symbol("Sakshi");
console.log(r1 == r2);

//7)Bigint:it is a built-in object that provides a way to represent whole numbers greater than 253.The largest number that javascript can reliably represent with the primitive is 253,which is represented by MAX_SAFE_INTEGER constant.
let b = BigInt("0b1010101001010101001111111111111111");
console.log(b);





