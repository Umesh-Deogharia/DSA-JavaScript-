let arr = [1, 3, 2, 4, 2, 4, 5, 6, 4, 8, 0];

for (let i = 0; i < arr.length; i++){
    let min = 0;
    for (let j = i+1; j < arr.length-1; j++) {
        if (arr[min]>arr[j]) {
            min = j;
        }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
}
console.log(arr)