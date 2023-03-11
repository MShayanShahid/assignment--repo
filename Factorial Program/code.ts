function factorial(num:number)
{
    let f:number=1;                             //f=Factorial
    for(let i=1;i<=num;i++)
    {
        f*=i;                                   //Factorial X With Loop Index and Updates it value
    }
    console.log("Factorial of "+num+" is "+f);
}
factorial(5);