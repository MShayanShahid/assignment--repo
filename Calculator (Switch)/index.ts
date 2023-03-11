function Calc(num1:number,num2:number)
{   
    let choice:number=2;   //Can be Any
    console.log("Select Operator \n +(Add) by Pressing 1 \n -(Minus) by Pressing 2 \n x(Mult) by Pressing 3\n /(Divide) by Pressing 4\n");
    switch(choice)
    {
        case 1:
            console.log("Answer:\t"+(num1+num2));
            break;
        case 2:
            console.log("Answer:\t"+(num1-num2));
            break;
        case 3:
            console.log("Answer:\t"+(num1*num2));
            break;
        case 4:
            console.log("Answer:\t"+(num1/num2));
            break;
        default:
            console.log("Wrong Input");
    }
}
Calc(2,2);
