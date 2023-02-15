const promise1 = new Promise((resolve, reject)=>reject("Reject"));
const promise2 = new Promise((resolve, reject)=>resolve("resolve"));
const promise3 = new Promise((resolve, reject)=>resolve("resolve2"));

//all
Promise.any([promise1,promise2,promise3])
    .then(Response=> console.log(Response))
    .catch(error => console.log(`Error in promises ${error}`))