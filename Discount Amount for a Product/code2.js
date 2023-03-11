function Input(pp, dp) {
    var discount = pp * (dp / 100);
    if (dp >= 50) {
        console.log("Discount percentage is invalid.");
    }
    else {
        console.log("Discount percentage is valid.");
        console.log("Discount Price:\t" + discount);
    }
    
}
function Output() {
    var productprice = 2000;
    var discountpercentage = 25;
    console.log("Product Price:\t" + productprice);
    console.log("Discount Percentage:\t" + discountpercentage + "%");
    Input(productprice, discountpercentage);
}
Output();
