// Flooring and Ceiling

function flooringAndCeiling(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  let asc;

  
  while(start <= end){
  mid = Math.floor((start+end)/2)
    if (arr[mid] === target ) {
      return 'floor is ' + arr[mid] + ' and ceil is '+ arr[mid + 1]
    } 

      if (target > arr[mid]) {
          start = mid + 1
        } else {
          end = mid - 1
        }  
      if (target > arr[mid]) {
          end = mid - 1
      } else {
          start = mid + 1
      }
  }
  if (target > arr[mid]) {
      return 'floor is ' + arr[mid] + ' and ceil is '+ arr[mid + 1]
  }else {
      return 'floor is ' + arr[mid] + ' and ceil is '+ arr[mid + 1]
  } 
  }
  
  console.log(flooringAndCeiling([10, 20, 30, 40, 50, 60, 70, 80, 90, 100],57 ));  


