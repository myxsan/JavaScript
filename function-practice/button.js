let counter = 0;
let counterDOM = document.getElementById('counter');

let inDOM = document.querySelector('#increase');
let decDOM = document.querySelector('#decrease');
inDOM.addEventListener('click', clickEvent);
decDOM.addEventListener('click', clickEvent);
console.log(counterDOM);
counterDOM.innerHTML = counter;

function clickEvent() {
    if (this.id === 'increase') {
        counter++;
    }
    else {
        counter--;
    }
    counterDOM.innerHTML = counter;
}