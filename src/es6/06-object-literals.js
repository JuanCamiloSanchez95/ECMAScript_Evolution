// enchaced object literals

function newUser(user,age,country,uId){
    return {
        user,
        age,
        country,
        id : uId
    }
}

let man1 = newUser("daju",32,"Col",1)
let man2 =newUser("dsad",21,"Col",2)
console.log(man1 , man2);