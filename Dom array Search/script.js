let data = [2, 43, 12, 34, 24, 5, 32, 23, 342];
// let find = prompt(`Which Number's Index do you want to find`);

const body = document.querySelector('body');
let input = document.createElement('input');
let btn = document.createElement('button');
btn.textContent = `Find`;
body.appendChild(input);
body.appendChild(btn);
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let ans = -1;
    for (let i = 0; i < data.length; i++) {
        if (data[i] === parseInt(input.value)) {
            // alert(i);
            ans = i
            break;
        } 
        
    }
    if (ans === -1) { 
        alert('Number not found');
        
    } else {
        alert(`Number found at index ${ans}`);
    }
 
})

