let arr = [1,2,3,4,5]

function sumArrayExceptOneElement(arr:number[]) {
   let sum = 0    
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++) {
            sum += arr[j]
        }
        sum -= arr[i]
        console.log(`Sum everything except ${arr[i]}, the sum is ${sum}`);
        sum = 0       
    }
}

sumArrayExceptOneElement(arr)