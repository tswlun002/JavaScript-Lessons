
 import {capitalizationString}  from "./index.mjs"
//print to console
console.log('Hello world');

//Data types
/*
1. undefined 
2. null
3. boolean
4. String
5. symbol
6. number
7. object
*/

/*
special case : var- can be any data type above
can be used through the programme (Global)
*/
var name = "lunga";
console.log(name);

//Same as var but it bind the variable, it can't be redefined at same scope
//Also, you can't declare variable twice with let on the same scope
let Name = "Tsewu";
console.log(Name);

//variable that can not change from inti assignemt
const pi = 3.14;
console.log(pi);

//subtraction
var add = 3+4;
var sub = 3-4;
var multiply = 3*4;
var div =3/4;

//increment
var increment =0;
//up
increment=increment+1; /*or*/ increment++; /*or*/ increment+=1;
console.log(increment);
//down
increment=increment-1; /*or*/ increment-- ;/*or*/ increment-=1;
console.log(increment);

/*
float:
multiplying and division float gives you decimal 
if answer has zero decimal value only
*/
var flo= 4.5*2.0;
console.log(flo);
flo=4.0 /2.0;
console.log(flo);

/*
Add quotation,spaces in a string:
add \ before quote("") 
\' single quote
\"" double quote
\\ back clash
\n newline
\r carriage return
\t tab
\b back space
\ form feed
*/

/**
 * Substring use variable[0]
 * E.g below
 */
var string = "lunga"
console.log(string[1]);


console.log("********************* ARRAYS *****************");
/**
 * Arrays
 * 1. signle array
 * 2. double array
 * 3. Access data using index
 * 4. modify array
 * 5. Add array existing array
 * 6. remove from array 
 * 7. Destruct array assigment
 */

var  arr = ["john",23];
console.log(arr);

arr = [["john",23],["jola",1]];
console.log(arr);

// print data at indexs
console.log(arr[1])

console.log(arr[0][1])

console.log(arr[0][0])

console.log(arr[1][1])

console.log(arr[1][0])

//manipulate array
arr[0][0]=0
arr[1][0]= 67
console.log(arr)

//add at last index
arr.push(["Zu, lu, Da"])
console.log(arr)

//remove last element
var poped = arr.pop();
console.log(arr)
//remove first element
poped = arr.shift()
console.log(arr)

//add index zero
arr.unshift(["Zu, lu"])
console.log(arr)

//7
const arry = [1,2,3,4,5,6];
const[x,y,,,z]=arry;  // x=1,y=2,z=6
console.log(x,y,z);

//removing first 3 element 
const[,,,...ar]=arry;
console.log(ar)


console.log("********************* FUNCTIONS *****************");
/**
 * FUNCTIONS 
 * declared by word 'function'
 * 1. Non returning and no param
 * 2. Add param
 * 3. Anounymous  function
 * 4. Closure 
 * 4.1 subtitute by abitrary using closure
 * 5. Rest parameters
 * 6. High order functions
 */


//1
function helloWorld(){
    console.log("Here we are doing JS");
}
//2
function helloWorldParam(a,b){
    console.log(a -b);
}

helloWorld();
helloWorldParam(10,5);
//3
var anounymous  = function(){
    return new Date();
}
//or can use arrow
anounymous = ()=>{
    return 34;
}
//with args
anounymous = (a,b)=>{
    return a+b;    
}
//4 
function closure(n){
    let value =n;
    return ()=>value;
}
let Closure = closure(2);
console.log(Closure())
//4.1
function closure1(n){
    
    return value =>value*n;
}
let Closure1 = closure1(2);
console.log(Closure1(5))

//5
function restFuntion(...param){
    return param;
} 
let rest =restFuntion(1,2,3,3,4,6,5,6,6,6,7,77,7,7,7);
console.log('${10/2}');

//6
/**
 * @param {*range of actions to be performed} n 
 * @param {*action or functionality to be performed} action 
 */
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
    action(i);
    }
    }
repeat(3, console.log);
function mult(...args){
    let product =1;
    for(let x=0; x<args.length;x++){
        product*=args[x];
    }
    return product;
}
function noisy(f) {
    
    return (...args) => {
    console.log("calling with", args);
    let result = f(...args);               //is same as output of mult([3,2,1])
    console.log("called with", args, ", returned", result);
    return result;
    };
    }
   console.log( noisy(mult)(3, 2, 1,2));


/**
 * Global scope
 */
var global =20;   //global can be redefined in the same scope
let global1 =2;   //in global scope global1 will be equal 2 and global1 can not be redefined in the global scope

function fun1(){
    let ok =5;              //global but inside function
     var ok1=0;         //only accessible within function scope
     let global1 =3;    //in this functional scope global1 =3
}
 
/**
 * typeof check type of variable
 */
function fun2(){
    if(typeof global!="undefined"){
        console.log("izile apha");
    }
    if(typeof ok!="undefined"){
        console.log("#Sila");
    }
}
fun1()
fun2()

/**
 * Global variable with same name as local variable
 * local variable within its scope takes preference or is priozatised
 */
var total =9;

function totalFun(){
    var total=1;
    return total;
}
console.log(totalFun());
console.log(total);

/**
 * Stricly equal  uses '==='
 * but normal equal uses '=='
 * 3 ===3 is true
 * 3 === '3' is false
 * 3 == 3 or 3=='3' is true 
 */

function equals(a ){
    if(a=='3'){
        return "normal check";
    }
    if(a==='3'){
        return "strictly check";
    }
}
console.log(equals(3))

console.log(typeof '4.5');

/***
 * Conditional operation
 */
console.log(3>2 ? 3:2)

/**
 * Automatic type conversion
 * console.log(8 * null) → 0
 * console.log("5" - 1)→ 4
 * console.log("5" + 1) → 51
 * console.log("five" * 2) → NaN
 * console.log(false == 0) → true
 * To prevent this, use precise equal (===) 
 */

 console.log("********************* OBJECTS *****************");
/**
 * OBJECTS
 * 1. declaration
 * 2. Access properties:
 * 2.1 use dot notation
 * 2.2 use bracket notation
 * 3. update properties
 * 4. Add new property
 * 5. delete property
 * 6. lookup prperty
 * 7. nested object
 * 8. destructive assignment
 * 9. Function within object
 */
//1
var dog ={
    "name":"Puppy",
    "color":"black",
    "age":"2 years old"
};
//2.1
var name = dog.name;
var age = dog.age;
//2.2
var name1 = dog["name"];
var color = dog["color"];
//3
dog.name="Punky"
//4
dog["tale"]="1"
dog.bark ="woof"
//5 
delete dog.tale;
//6
function lookupDogProperty(value){
    return dog[value];
}
var dogAge =lookupDogProperty("age");
console.log(dog);

//7
var dogs ={
    "Pitbull":
    {
    "name":"Puppy",
    "color":"black",
    "age":"2 years old"
   },
    "Normal":
    {
        "Short":
        {
        "name":"Tocky",
        "color":"black",
        "age":"2 years old"
        }
    }
};

var myDog = dogs.Pitbull.name;
console.log(myDog)
let myDog1 = dogs.Normal.Short.name;
console.log(myDog1)

//8 
/**
 * @returns  doname and its color using destruction of  object 
 */
function destructDog (){
    const{name:dogName,color:myColor }=dog;
    return dogName +" "+myColor;
}
/**
 * @returns  doname and its color using destruction of nested object 
 */
function destructDog1 (){
    const{Pitbull:{name:dogName,color:myColor }}=dogs;
    return dogName +" "+myColor;
}

/**
 * takes only name and age of given object 
 */
function destructParam({name,age}){
    return "dog name is "+name+" and "+age;
}

var awe = destructDog();
console.log(awe);
var awe1 = destructDog1();
console.log(awe1);
var d  = destructParam(dog);
var d1  = destructParam(dogs.Pitbull);
console.log(d);
console.log(d1);

//9
var bicycle ={
     name:"lunga",
    newDog:function(name){
        this.name=name;

    }
};
bicycle.newDog("Wanga");
console.log(bicycle.name)


console.log("********************* CLASSES *****************");
/**
 * CLASSES
 * 1. constructor
 * 2 get and set
 */
//1
class Book{
    //1
    constructor(name){
        this.name=name;
    }
    //2 
    set setName(name){
        this.name=name;
    }

    get getName(){
        return this.name;
    }

}

var book  = new Book("Lion head");
console.log(book.name)
book.setName="Ingwe";
console.log(book.getName);




/**
 * Use imports 
 */
var lu = capitalizationString("lunga");
console.log(lu);





