

// NOO === Number Of Occurrences
// Binary Search

function numberOfOccurrences(arr,target){
let start = 0;
let end = arr.length - 1;
let mid;
let counter = 0;

while(start <= end){
 mid = Math.floor((start+end)/2)

 if(arr[mid] === target){
    counter++;
 }

 for (let i = mid - 1; i >= 0; i--){
    if (arr[i] === target) {
        counter++
    }
 }

 for (let i = mid + 1; i < arr.length; i++){
    if (arr[i] === target) {
        counter++
    }
 }
 return counter;
}


}

console.log(numberOfOccurrences([11,22,55,55,55,55,55,33,43,33,55,33,66,77,88],55)); 