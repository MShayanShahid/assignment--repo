function plusMinus(arr) {
    var positive = 0;
    var negative = 0; //To be the remainder of values updating
    var zero = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        }
        else if (arr[i] < 0) {
            negative++;
        }
        else {
            zero++;
        }
    }
    positive = positive / arr.length;
    negative = negative / arr.length;
    zero = zero / arr.length;
    console.log("Postive Ratios:\t" + positive.toFixed(6));
    console.log("Negative Ratios:\t" + negative.toFixed(6));
    console.log("Zero Ratio:\t" + zero.toFixed(6));
}
var arr1 = [-1, -1, 0, 1, 1];
var arr2 = [-4, 3, -9, 0, 4, 1];
plusMinus(arr1);
console.log("\n");
console.log("Another Array\n");
plusMinus(arr2);
