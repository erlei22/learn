{
    let x = 1;
    {
        let x = 2;
        console.log(x); //2

    }
    console.log(x); //1

}
console.log(x); //ReferenceError: x is not defined


{
    let b = 1;
    {
        b = 2;    //1 to 2
    }
    console.log(b);  //2
}