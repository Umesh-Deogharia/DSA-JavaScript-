let arr = [11, 14, 42, 48, 52, 10, 39];

// Max Elements

// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

// Second Max

let Max = 0;
let secondMax = 0;
for (let i = 0; i < arr.length; i++){
    // if (arr[i] > Max) {
    //     Max = arr[i]
    // }
    if ( arr[i] > Max ) {
        secondMax = Max;
        Max = arr[i]
        console.log('Second Max', secondMax);
        console.log('Max',Max);
    }
}