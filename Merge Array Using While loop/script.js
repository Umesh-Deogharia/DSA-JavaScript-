let arr1 = [11, 21, 33, 34, 51,62,72];
let arr2 = [8, 9, 10,11];
let arr3 = [];
let a1 = 0;
let a2 = 0;
let a3 = 0;

while (a1 < arr1.length && a2 < arr2.length) {
    if (arr1[a1] < arr2[a2]) {
        arr3[a3] = arr1[a1];
        a1++;
    } else {
        arr3[a3] = arr2[a2];
        a2++;
    }
    a3++;
}

while (a1 < arr1.length ){
    arr3[a3] = arr1[a1];
    a1++;
    a3++;
}
while (a2 < arr2.length) {
    arr3[a3] = arr2[a2];
    a2++;
    a3++;
}
console.log(a3, arr3);