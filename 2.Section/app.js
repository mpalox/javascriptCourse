//* log to console
/* console.log("hello world");
console.log(123);
console.log(true);

var greeting="hello";
console.log(greeting);


console.log([1,2,3,4]);
console.log({a:1,b:2});

console.table({a:1,b:2});

console.error("this is some errors");

console.clear();
console.warn("This is a warning ");

console.time("hello");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
    console.log("hello world");
console.timeEnd("hello");
console.clear();

multi
line
comments

//* var , let , const

var name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

//* Init var
var greeting;
console.log(greeting);
greeting="hello";
console.log(greeting);

//! Letters numbers _ $
//! can not start with number

//* multi word vars
var firstName="john"; //Camel Case
var first_name="Sara";//Underscore Case
var FirstName= "Tom"; //Pascal Case


//* Let 
let name;
name="John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);


//* Const
const name="John";
console.log(name);
//! can not reassing
//name = "Sara";
console.log(name);



const person = {
    name:"john",
    age:23,
}
person.name="Sara";
person.age=32;
console.log(person);

const numbers=[1,2,3,4,5];
numbers.push(10)

console.log(numbers);


//* primitife

//* string
const name="John Doe";
//* Number
const age=15;
//* Blooen
const hasKids=true;
//* null
const car=null;
//* undefine
let test;
//* Symbol
const sym=Symbol();

//* Reference Types -Object
const hobbies=["movie","music"]

//* Object Literal
const adress={
    city:"boston",
    state:"MA",
}

const today=new Date();
console.log(today);

console.log(typeof today);
*/

// let val;

//* Number to string
// val = String(555);
// val = String(4+4);

//* Bool to String
// val=String(true);

//* Date to String
// val=String(new Date);

//* Array to string
// val=[1,2,3,4];

//* toString
// val=(5).toString();
// val=(true).toString();

// String to number
// val=Number("5");
// val=Number(true);
// val = Number(false);
// val=Number(null);
// val=Number("Hello");
// val=Number([1,2,3]);
// val=parseInt("100");
// val=parseFloat("100.31");

//* Output
// console.log(valString());
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

// const val1=String(5);
// const val2=6;
// const sum=Number(val1 +v al2);
// console.log(sum);
// console.log(typeof sum);

// const num1=100;
// const num2=50;
// let val;

// //* Simple math width numbers
// val=num1+num2;
// val=num1*num2;
// val=num1-num2;
// val=num1/num2;
// val=num1%num2;

// //* Math Object
// val=Math.PI;
// val=Math.E;
// val=Math.round(2.4);
// val=Math.ceil(2.4);
// val=Math.floor(2.4);
// val=Math.sqrt(64);
// val=Math.abs(-3);
// val=Math.pow(8,2);
// val=Math.min(2,33,57,100,1,-5);
// val=Math.max(2,33,57,100,1,-5);
// val=Math.random()
// val=Math.floor(Math.random() * 20);

// console.log(val)

// const firstName = "William";
// const lastName = "Palo";
// const age = 36;
// const str='Hello there my name is Brad';
// const tags='web design,web design,web design'
// let val;

// val = firstName + lastName;

// //* Concatenation
// val = firstName + " " + lastName;

// //* Append
// val = "William ";
// val += "Palo";
// val = "Hello my name is " + firstName + " and I am " + age;

// //* Escaping
// val = "that's awesome, I can't wait";

// //*length
// val = firstName.length;

// //* Concat
// val = firstName.concat(" ", lastName);

// //* change case
// val = firstName.toUpperCase();
// val = firstName.toLocaleLowerCase();
// val = firstName[2];

// //* indexOf
// val=firstName.indexOf('l');
// val=firstName.lastIndexOf('l');

// //* charAt
// val=firstName.charAt("2");
// //* Get last character
// val=firstName.charAt(firstName.length-1);

// //subString
// val=firstName.substring(0,4);

// //* slice()
// val=firstName.slice(0,4);
// val=firstName.slice(-3);

// // *split()
// val= str.split(' ');
// val=tags.split(',');

// //* replace()
// val=str.replace('Brad','Jack' );

// //* includes()
// val=str.includes('Hello');

// console.log(val);
// const name = "john";
// const age = 31;
// const job = "Web Developer";
// const city = "Miami";
// let html;

// //* Without template  strings (es5)
// html =
//     '<ul>' +
//         '<li>Name :' + name +'</li>'+
//         '<li>Age :' + age +'</li>'+
//         '<li>Job :' + job +'</li>'+
//         '<li>City :' + city +'</li>'+
//     '</ul>';

// function hello(){
//     return 'hello';
// }
// //* With template strings (es6)
// html=`
//     <ul>
//         <li>Name : ${name}</li>
//         <li>Age : ${age}</li>
//         <li>Job : ${job}</li>
//         <li>City : ${city}</li>
//         <li>${2+2}</li>
//         <li>${hello()}</li>
//         <li>${age > 30 ? 'over 30' :'under 30' }</li>

//     </ul>
// `;

// document.body.innerHTML = html;

//! Create some arrays

// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);

// const fruits = ["Apple", "Banana", "Orange", "Pear"];
// const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 2 }, new Date()];

// let val;

// //* get array length
// val = numbers.length;
// //* check if is array
// val = Array.isArray(numbers);
// //* get single value
// val = numbers[3];
// val = numbers[0];
// //insert into array
// numbers[2] = 100;

// //* find index of value
// val = numbers.lastIndexOf(36);

// //* mutating Arrays
// //* add on to end
// numbers.push(250);
// //* add on to front
// numbers.unshift(120);

// //* take off from end
// numbers.pop();

// //* take off from front
// numbers.shift();

// //* Splice values
// numbers.splice(1, 1);
// //* reverse
// numbers.reverse();

//* concatenate   array
// val = numbers2.concat(numbers);

// //* Shorting array
// val = fruits.sort();
//val = numbers.sort();

//* use the compare fuction
// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// //* reverse sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

//* find
// function under50(num) {
//   return num > 50;
// }
// val=numbers.find(under50);

// console.log(numbers);
// console.log(val);
// const person = {
//   firstName: "Mustafa",
//   lasName: "Palo",
//   age: 30,
//   email: "adadasdasd@fasdasdas.com",
//   hobbies: ["music", "sports"],
//   address: {
//     city: "Miami",
//     state: "FL",
//   },
//   getBirthYear: function () {
//     return 2017 - this.age;
//   },
// };

// let val;
// val = person;

// //* Get specific value
// val = person.firstName;
// val = person["firstName"];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address["city"];
// val = person.getBirthYear();

// console.log(val);
// const people=[
//     {name:'Ahmet',age:30},
//     {name:'mike',age:35},
//     {name:'mikes',age:39}
// ]
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].name);

// }

// let val;
// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');

// val = today.getDate();
// console.log(val);

//const id=100;

// const color = "blue";
//     switch (color) {
//     case "red":
//         console.log("Color is red");
//         break;
//     case "blue":
//         console.log("Color is blue");
//         break;
//     default:
//         console.log("Color is not red or blue");
//         break;
//     }

// let day;
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
// }

// console.log(`Today is ${day}`);

//* Functions declarations

// function great(firstName='Mustafa',lastName='Palo'){
//    //console.log('hello');
//     return 'Hello ' + firstName + ' ' +lastName;
// }

// console.log(great());

// //* Function expressions
// const square=function(x = 3){
//     return x * x;
// };

// console.log(square(8));

//* immidiatley invokable function expressions IIFEs

// (function(){
//     console.log(`IIFE run`);
// })();

// (function(name){
//     console.log(`Hello `+name);
// })('Mustafa');

//* Property methods
// const todo={
//     add:function(){
//         console.log('Add todo...');
//     },
//     edit :function(id){
//         console.log(`Edit todo ${id}`);
//     }
// }
// todo.delete=function(){
//     console.log(`Delete todo....`)
// }

// todo.add();
// todo.edit(22);
// todo.delete();

//! For loop
// for (let i = 0; i < 10; i++) {
//     //console.log('Number '+ i);
//     if(i===2){
//         console.log('2 is my favorite number');
//         continue;
//     }
//     if(i===5){
//         console.log('stop the loop');
//         break;
//     }

//     console.log('Number '+ i);
// }
//! While loop

// let i=0;
// while(i<10){
//     console.log('Number '+ i);
//     i++;
// }

//! do while
// let i=0;

// do{
//     console.log('Number ' + i);
//     i++;
// }
// while(i<10);

// const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
//! Foreach
// cars.forEach(function(car){
//     console.log(car);

// });
//! Map

//! Window methods / Objects / Proporties

//* Alert
//alert("Hello World");

//* Prompt
// const input =prompt();
// alert(input);

//* Confirm
// if(confirm("Are you sure")){
//     console.log("Yes");
// }
// else
//     console.log("No");

let val;
//* outter height and weight
//val = window.outerHeight;
//val = window.outerWidth;

// val=window.navigator.platform;

// console.log(val);

//! Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// function test(){
//     var a=4;
//     var b=5;
//     var c=6;
//     console.log("Global Scope : " + a, b, c);
// }
// test();
// if (true) {
    
// }


// console.log("Global Scope : " + a, b, c);

const sayi=10;
const sayi2=20;

const sonuc=sayi/sayi2;

