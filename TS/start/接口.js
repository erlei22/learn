function greeter(person) {
    return "Hellow, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "long", lastName: "zhao" };
document.body.innerHTML = greeter(user);
