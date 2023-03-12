const { time } = require("console");

function timeConversion(s) {
    var isAM = s.includes("AM");
    var timeArr = s.slice(0, -2).split(":");
    var hour = parseInt(timeArr[0]);
    var minute = timeArr[1];
    var second = timeArr[2];
    if (isAM && hour === 12) {
        hour = 0;
    }
    else if (!isAM && hour !== 12) {
        hour += 12;
    }
    return "".concat(hour.toString().padStart(2, "0"), ":").concat(minute, ":").concat(second);
}
// Example usage
console.log(timeConversion("12:01:00PM")); // Output: "12:01:00"
console.log(timeConversion("12:01:00AM")); // Output: "00:01:00"
console.log(timeConversion("05:00:00PM"));//Output: "17:00:00"
console.log(timeConversion("05:00:00AM"));//Output: "05:00:00"