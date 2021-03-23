let obj = {
    name: "Sadaf Zehra",
    email: "sadafzehra1042gmail.com"
}
//let name = obj.name;

//console.log(name);
//Object  Destructuring
let {name,email} = obj;

//console.log(name,email)
// Array Destructuring
let arr  = ["apple","mango","kivi"]

let [name1,name2,name3] = arr;
console.log(name1)

//Function Expression

let foo = function(){
    console.log("Hello world")
}
foo()

// Arrow functions

let szname = () =>{
    console.log("Sadaf")
}
szname()
let oneParam = fname =>{
    console.log(`Hello ${fname}`) // template  literals
}
oneParam ("Sadaf")
let twoParam = (fname,lname)=>{
    console.log(`Hello ${fname} ${lname}`);
}
twoParam("Sadaf","Zehra")
let newFunc = _ =>{
    return "hello"
}
console.log(newFunc())
let newFunc1 = () =>{
    return "hello Sadaf"
}
console.log(newFunc1())

let newFunc2 = () => "hello Zehra"

console.log(newFunc2())

let newFunc3 = (name) => console.log(name)

newFunc3("Sadaf")


let newFunc4 = () => {
    console.log(this)
}
// In arrow function this target to parent function in ES6 in ES5 this target to own function 
newFunc4()
setInterval(()=> console.log("hello what are"),1000)
// this is a callback function(render_data)
// jesay firebase say data mangwa rahay haen aur uss ko data kay anay kay baad loi function chalana hae


// jo function apnay under parameter recieve kar raha ho aur parameter bhi function ho 
// ussay higher order function kehtay haen
let getdata = (render_data) => {
    setTimeout (() => render_data("sadaf"),3000
    )
}
let render_data = (name) =>{
console.log(name)
}
getdata(render_data)





// Higher order function of array

let arr1 = [{name:"sadaf",age:22},{name:"fizza",age:18}]

let filter = arr1.filter(a => false
)
console.log(filter)


let arr2 = [{name:"sadaf",age:22},{name:"fizza",age:18}]

let filter1 = arr2.filter(a => a.age == 22
)
console.log(filter1)
// search
let firstname = "Sadaf"
let search = "Sa"
if (firstname.startsWith(search)){
 console.log(firstname)
}



// Array map
let arr3 = [2,3,4,5]
let multiply = arr3.map(a => a * 3)
console.log(multiply)

/*let tab = arr3.map(a => {
    document.getElementById("name").innerHTML = tab
})
console.log(tab)*/



let arr6 = [{name:"sadaf",age:22},{name:"fizza",age:18}]
//let nam = 

//ES6 CLASSES
// S capital b/c it is constructor function
function Student(name, email){
    this.name = name;
    this.email = email
}
let student1 = new Student("sadaf","sadaf@gmail.com");
console.log(student1);

class Student2{
    constructor(name1,email){
    this.name = name1;
    this.email = email
    }
}
let student3 = new Student2("Sadaf","sadaf@gmail.com")
console.log(student3)


class School extends Student2{
    constructor(name1,email,school){
      super(name1,email)
      {
         this.School = school;  
      }
    }
}

let student5 = new School("ali","sadafzehra104@gmail.com","UBIT");
console.log(student5)



//name4 = "basit"
function poo(){
    var name4 = "ghous"
    console.log(name4)
    
}

poo()

//console.log(name4)

if(true){
    var name7 = "saleem";
    console.log(name7)
}
console.log(name7)

let name8 = "zaheem";
if(true){
    let name8 = "hassan";
    console.log(name8)
}
console.log(name8)

let name9 = "king8"
function loo(){
    let name9 = "king"
    console.log(name9)
    
}
loo()
console.log(name9)



var name10 = "saleema";
var name10 = "haleem";
console.log(name10)

for(var i = 0;i<10;i++){
  var king = "polo";
}
console.log(king)
/*let name11 = "saleema";
let name11 = "haleem";
console.log(name11)*/

const school4 = "UBITGIRLS"
var obj9 = {
 schoolname : school4
}
console.log(obj9.schoolname)


//Tempelate Literals

let fName = "Qaum"
let lName = "Ali"

console.log(` My name is ${fName} ${lName}`)


// Spread Operators

var studentArr = ["sadaf","Ali"];
var studentArr1 = ["Zehra","Fizza"];

let merge = studentArr.concat(studentArr1)

console.log(merge)


var merge1 = [...studentArr,"Zehra","Fizza"]

console.log(merge1)

var stuObj = {
    name23 : "Sadaf",
    name24 : "Sadaf1"
}
var merge2 = {
    ...stuObj,
    school :"mit"
}
console.log(merge2)


//Object Destructuring

var student7 = {
 name45:"sadaf",
 class45:"4th year",
 seatNo: 45
}

let { name45,class45,seatNo} = student7;
console.log(name45,class45,seatNo);

//Ternary Operator
// for else if use ternary operater again in the condition
var age = 20;

if(age > 30){
    console.log("30 se bara hae.")
}else{
    console.log("30 se chota hae.")
}


age > 30 || age === 20 ? console.log("30 se bara hae") : console.log("30 se chota hae.")

//bool not rendered on dom

var bool = true;
var name34 = bool && "ali";
console.log(name34);

// Async or sync

setTimeout(function(){
    console.log("Number 1");
},1000);
console.log("Number 2");
console.log("Number 3")

//Promise
var promise = new Promise(function(resolve,reject){
  var zinger = "Available";
  if(zinger === "Available"){
      resolve("Khiladiya");
  }else{
      reject("Nahi Khaya")
  }
})

promise.then(function(data){
    console.log(data)
})
 
.catch(function(error){
    console.log(error)
})

/*firebase.database().ref("users").on("child_added",function(data){
    console.log(data.val())
})

console.log(data.val()) data nahii milay ga due to time*/

/*var promise1 = new Promise(function(resolve,reject){
    firebase.database().ref("users").on("child_added",function(data){
        if(data.val()){
            resolve(data.val())
        }else{
            reject("something went wrong");
        }
    })
})

promise1.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})
*/
var git;
async function myawait(){
   let pro = new Promise(function(resolve,reject){
       var res = "hello"
       if(res==="Hello"){
           resolve("Hii")
       }else{
           reject("OOuchhh")
       }
   })
   git = await pro;
   return git;
}
myawait().then(function(value4){
 console.log(value4)
})
.catch(function(error4){
    console.log(error4)
})

async function myFunction() {
    return "Mello";
    
  }
async function myFunction1() {
    return Promise.reject("eeeeello");
  }
  myFunction1().then(
    function(value) { 
        console.log(value) },
    function(error) {
        console.log(error)
     }
  );

  myFunction();
