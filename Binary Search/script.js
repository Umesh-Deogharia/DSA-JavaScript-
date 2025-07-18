//Binary Search of an array

// let arr = [2, 12, 23, 43, 23, 45, 9, 49, 53, 99];
// arr = arr.sort((a,b)=>a-b)
// let index = binarySearch(arr, 0, arr.length - 1, 45);

// if (index === -1) {
//     console.log('Element not found');
// } else {
//     console.log('Target Found on', index, 'th Element');
// }

// function binarySearch(arr,first,last,target) {
//     while (first <= last) {
//         let mid = Math.floor((first+last)/2);
//         if (arr[mid] == target) {
//             return mid;
//         }
//         else if (arr[mid] > target) {
//             last = mid - 1;
//         }
//         else {
//             first = mid + 1;
//         }
//     }
//     return -1;
// }



// 