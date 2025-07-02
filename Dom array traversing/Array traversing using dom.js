let input = document.querySelector('input');
const btn = document.querySelector('button');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numberFinder() {
    let num = parseInt(input.value);
    // for (let i = 0; i < arr.length; i++) {
        // document.writeln(arr[num]);
        // break;
    // }
    if (num < arr.length && typeof num === "number" && num>0) { 
        alert(arr[num]);
    }
    else if (num <= -1) {
        alert(`You must have to give postive value`);
    }
    else {
        alert(`You are giving greater numbers than ${arr.length-1}`);
        
    }
}