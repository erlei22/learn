function greeter(person:string) {
    return "Hellow, " + person;
}
let user = 123;
document.body.innerHTML = greeter(user);

// tsc first.js
/*
first.ts:5:35 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
 5 document.body.innerHTML = greeter(user);

 会报错，但是即使报错也会编译`
 
*/ 
 