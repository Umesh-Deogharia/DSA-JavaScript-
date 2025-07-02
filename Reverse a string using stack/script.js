let data = [];
currentSize = data.length;

function push(newValue) { 
    data[currentSize] = newValue;
    currentSize++;
}
function pop() {
    let lastItem = data[currentSize - 1];
    currentSize--;
    data.length = currentSize;
    return lastItem;
    // data.length--;
}

function reverseString(str) { 
    for (let i = 0; i < str.length; i++){
        push(str[i]);
    }
    for (let i = 0; i < str.length; i++){
         pop(str[i]);
    }
    // console.log(str);
}

// push(1);
// push(2);
// push(10);
// pop()

let str = "hello";
reverseString(str);
console.log(data);