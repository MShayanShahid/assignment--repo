function Calc(num1, num2) {
    var choice = 2;     /can be any From (1-4)
    console.log("Select Operator \n +(Add) by Pressing 1 \n -(Minus) by Pressing 2 \n x(Mult) by Pressing 3\n /(Divide) by Pressing 4\n");
    switch (choice) {
        case 1:
            console.log("Answer:\t" + (num1 + num2));
            break;
        case 2:
            console.log("Answer:\t" + (num1 - num2));
            break;
        case 3:
            console.log("Answer:\t" + (num1 * num2));
            break;
        case 4:
            console.log("Answer:\t" + (num1 / num2));
            break;
        default:
            console.log("Wrong Input");
    }
}
Calc(2, 2);
