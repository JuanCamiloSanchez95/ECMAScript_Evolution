/* ARRAYS DESTRUCTURE */

let fruits = ['Apple','Banana','Orange'];
let [a,b] = fruits;
console.log(a,fruits[1]);

let [,,fruit] = fruits;
console.log(fruit);

/* OBJECT DESTRUCTURE */
let user = {username:"oscar", age:34}
let {username,age }= user;
console.log(username,age);

/* SPREAD OPERATOR */
let person  = {name:'oscar',age:21}
let med = {h:170,w:60}
let  country = 'COL';

let data = { id:1,...person,...med , country}
console.log(data);

let s = [..."HOLA"];
console.log(s)

/* REST */
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return {num,...values}
}
sum(1,2,34,5,6,7,8,432);