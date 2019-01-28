interface Person{
    firstName:string;
    lastName:string;
}
function greeter(person:Person) {
    return "Hellow, " + person.firstName + " " + person.lastName
}

let user = {firstName : "long" , lastName: "zhao" };

document.body.innerHTML = greeter(user);

