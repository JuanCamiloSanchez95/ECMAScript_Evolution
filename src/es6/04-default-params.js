function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 20;
    var country = country || "Colombia";
    console.log(name,age,country);
}

newUser();
newUser("robert",15,"MX")
newUser("Dana",15)

function newAdmin(name = "Oscar",age = 20, country = "Col"){
    console.log(name,age,country);
}
newAdmin();
newAdmin("robert",15,"MX")
newAdmin("Dana",15)
