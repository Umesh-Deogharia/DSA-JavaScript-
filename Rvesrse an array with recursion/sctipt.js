let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function test(arr, start, end) {
    // console.log("test function called");
    if (start <= end) {
        
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        console.log(arr);
        
        test(arr, start + 1, end - 1);
        
        
    }
}

test(arr, 0, arr.length - 1);


// function test(arr, start, end) {
//     // console.log("test function called");
//     for (let i = 0; i < arr.length; i++) {
//     //   console.log(arr[i]);
//     // if (arr[i] > 0) {
//     //     test(arr[i]-1);
//         // }
        
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//         if (start >= end) {
//             break;
//         }
//     }
//     console.log(arr);
//     // console.log(arr[i]);
// }
// test(arr,0,arr.length-1);
