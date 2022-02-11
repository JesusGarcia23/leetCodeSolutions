// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. 

// Do the above modifications to the input array in place and do not return anything.



var duplicateZeros = function(arr) {
  const originalArray = [...arr];
  const maxLength = originalArray.length;
  for (let i = 0; i <= originalArray.length - 1; i++) {
    if (arr[i] === 0) {
      const rest = arr.slice(i + 1, arr.length);
      arr.splice(i + 1, 1, 0, ...rest);
      i += 1;
    }
    arr.splice(maxLength)
  }
};

// V2 UNNOFICIAL 
var duplicateZeros = function(arr) {
  const originalArray = [...arr];
  arr.toString().replaceAll(',','').replaceAll('0', '00').split('').map(item => {
    return parseInt(item, 10)
  }).splice(0, originalArray.length)
};

// V2
var duplicateZeros = function(arr) {
  const originalArray = [...arr];
  const newPlaces = {}
  let currentIndex = 0;
  for (let i = 0; i <= originalArray.length - 1; i++) {
    if (arr[i] === 0) {
      newPlaces[currentIndex] = arr[i];
      newPlaces[currentIndex + 1] = arr[i];
      currentIndex += 2;
    } 
    else {
      newPlaces[currentIndex] = arr[i]
      currentIndex++
    }
  }

  for (let i = 0; i <= originalArray.length - 1; i++) {
    arr[i] = newPlaces[i]
  }
};

// V3
var duplicateZeros = function(arr) {
    const copy = [...arr];
    let max= arr.length;
    let count = 0;
    let i = 0;
  
    while (count < max) {
      arr[count] = copy[i];
      if (arr[count] === 0) {
        arr[count + 1] = 0;
        count++;
      }
      i++;
      count++;
    }
  };