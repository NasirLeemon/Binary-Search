

// 2. Binary Search

// let array = [17, 26, 35, 44, 53, 62, 71, 81, 99, 108];

function binarySearch(arr, target) {
let start = 0;
let end = arr.length - 1;
let mid;
let asc;

if (arr[start] < arr[end]) {
    asc = true
} else {
    asc = false
}

while(start <= end){
mid = Math.floor((start+end)/2)
  if (arr[mid] === target) {
    return 'floor is ' + arr[mid] + ' and ceil is '+ arr[mid + 1]
  } 
if (asc) {
    if (target > arr[mid]) {
        start = mid + 1
      } else {
        end = mid - 1
      } 
} else {
    if (target > arr[mid]) {
        end = mid - 1
    } else {
        start = mid + 1
    }
    return 'floor is ' + arr[mid] + ' and ceil is '+ arr[mid - 1]
}
}
if (target > arr[mid]) {
    return 'floor is ' + arr[mid] + ' and ceil is '+ arr[mid + 1]
}else {
    return 'floor is ' + arr[mid -1] + ' and ceil is '+ arr[mid]
} 
}

console.log(binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 57));  
console.log(binarySearch([100, 90, 80, 70, 60, 50, 40, 30, 20, 10], 70));
