let arr1 = [12, 43, 244, 2, 121, 244, 32, 44, 24];
let arr2 = [40, 1, 33, 22, 42, 55, 4, 5, 9, 90];
let arr3 = [];


let arr4 = [...arr1,...arr2]
console.log(arr4);
// arr3 = arr1.concat(arr2)
console.log(arr3);

//             // or

for (let i = 0; i < arr1.length; i++) { 
    arr3[i] = arr1[i];
}

for (let i = 0; i < arr2.length; i++) { 
    arr3[arr1.length+i]= arr2[i];
}

console.log(arr3);

// Reverse an array

let reverse = [21, 22, 24, 13, 12, 44, 43];

for (let i = reverse.length-1; i >= 0; i--){
    console.log(reverse[i]);
}



//             // or


console.log(reverse.reverse());