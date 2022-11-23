

// Flooring and Ceiling


function floorAndCeil(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  let asc;
  if (start < end) {
    asc = true
  } else {
    asc = false
  }

      while(start <= end){
        mid = Math.floor( (start + end) / 2)
      if (asc) {
        if (arr[mid] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
      } else {
        if ( arr[mid] > target ) {
            start = mid + 1
        } else {
            end = mid -1
        }
      }

    }
 return 'Floor is ' + arr[mid - 1] + ' and Ceil is ' + arr[mid]

}

console.log(floorAndCeil([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 57));

// Problem = if we take 10-19 as target than it will show undefined!