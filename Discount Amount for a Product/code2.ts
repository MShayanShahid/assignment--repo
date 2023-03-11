function Input(pp:number,dp:number)
{
    const discount=pp*(dp/100);

    if(dp>=50)
    {
        console.log("Discount percentage is invalid.");
    }  
    else
    {
        console.log("Discount percentage is valid.");
    }  
    console.log("Discount Price:\t"+discount);
}    
function Output()
{
    let productprice=2000;
    let discountpercentage=25;
    console.log("Product Price:\t"+productprice);
    console.log("Discount Percentage:\t"+discountpercentage+"%");
    Input(productprice,discountpercentage);
}
Output();