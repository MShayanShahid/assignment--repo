var arr = [1, 2, 3, 4, 5];
function sumArrayExceptOneElement(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            sum += arr[j];
        }
        sum -= arr[i];
        console.log("Sum everything except ".concat(arr[i], ", the sum is ").concat(sum));
        sum = 0;
    }
}
sumArrayExceptOneElement(arr);
