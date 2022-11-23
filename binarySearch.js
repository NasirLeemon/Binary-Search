

// 2. Binary Search

let array = [17, 26, 35, 44, 53, 62, 71, 81, 99, 108];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  let asc;
  if (start < end) {
    asc = true
  } else {
    asc = false
  }
  

    while(start <= end ){
        mid = Math.floor((start+end)/2)

        if (arr[mid] === target ) {
            return 'data found at ' + mid ;
        }

        if (asc) {
            if( arr[mid] > target ) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            if( arr[mid] > target) {
                start = mid + 1
        } else {
            end = mid - 1 
        }
    }
    }


}

console.log(binarySearch([17, 26, 35, 44, 53, 62, 71, 81, 99, 108], 62)); 
