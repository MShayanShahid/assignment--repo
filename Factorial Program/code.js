function factorial(num) {
    var f = 1; //f=Factorial
    for (var i = 1; i <= num; i++) {
        f *= i; //Factorial X With Loop Index and Updates it value
    }
    console.log("Factorial of " + num + " is " + f);
}
factorial(5);
