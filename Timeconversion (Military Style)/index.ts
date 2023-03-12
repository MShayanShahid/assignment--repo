function timeConversion(s: string): string {
    const isAM: boolean = s.includes("AM");
    const timeArr: string[] = s.slice(0, -2).split(":");

    let hour: number = parseInt(timeArr[0]);
    const minute: string = timeArr[1];
    const second: string = timeArr[2];

    if (isAM && hour === 12) {
        hour = 0;
    } else if (!isAM && hour !== 12) {
        hour += 12;
    }

    return `${hour.toString().padStart(2, "0")}:${minute}:${second}`;
}

// Example usage
console.log(timeConversion("12:01:00PM")); // Output: "12:01:00"
console.log(timeConversion("12:01:00AM")); // Output: "00:01:00"
