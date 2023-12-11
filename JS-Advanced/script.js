//Advanced Topics in JS 
// var a= 12;
// let b= 19;
//Window

// ES5 Old version whichh has var 
// ES6 New version has let and const
// Var is Functional Scoped, Let and Const is braces scoped 
// Var adds itself in Window Object, Let and Const doesn't 

// Browser gives 3 things- 1.Window, 2. Stack, 3.Heap, which is known as Browser context API

//Stack and Heap are the memories 
//To save the intermediate data, we use Heap memory !

//Execution Context 
// container where function code is executed and its created whenever a function is called,
// it contains 3 things, variables, and lexical environment.

// Lexical Environment 
// Lexical Environment hota hai ek chart jisme ye likha hota hai ki aapka particular function
// ki cheejo ko access kar sakta hai and kinko nahi, matlab ki it holds its scope and scope chain


//Copy using spread 
// var a= [1,2 ,3 , 3, 4];
// var b= [...a];
// b.pop();
// var a= {name:"hello", age: 27};
// var b= {...a};
// b.name= "Helloworld";

//Truthy and Falsy 
// falsy list- 0 , false,   undefined, null, NaN, document.all
// if(NaN){
//     console.log("True");
// }
// else{
//     console.log("False");
// }
// if(-1){
//     console.log("True");
// }
// else{
//     console.log("False");
// }

//For each Loop 
//For each kabhi bhi by default aapke array mein change nahi karta wo aapke changes
// karke dete hai array ki temporary copy kar jiske wajah se array humesha same rehta hai

// For in Loop
// var obj= {
//     name: "Pratham", 
//     age: 25, 
//     city: "Dombivali",
// };
// for(var key in obj){
//     console.log(key, obj[key]);
// }

// Do- while loop
// var a= 12;
// do{
//     console.log("Hey");
//     a++;
// }
// while(a<15)

//Call-Back-Funtions 
// Aaisa code jo baad mai chalta hai use hum ek function dedete hai ke bhaiya jab 
// complete hojana to ye function chala dena, aur wo function jo hum dete hai wo ek
// normal func hi hota hai aur use kehta hai callback func.
// setTimeout(function(){
//     console.log("2 Second baad chala");
// }, 2000);

//First Class Functions
// JS mai ek concept hai jiska matlab hota hai ki aap fnc ko use kar sakte ho 
// as a value
// function abcd(a){
//     a();
// }
// abcd(function(){
//     console.log("Hey");
// })

//BTS of Array, Array behaves as object 
// var arr= [1,2, 3,4 , 4,5];
// var arr= {
//     0:1, 
//     1:2, 
//     2:3,
// };

// Delete Object prop
// var a= {
//     name: "Pratham", 
//     age: 18,
// }
// delete a.age;