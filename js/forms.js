//Form Submit
let formDOM = document.querySelector('#userForm');
formDOM.addEventListener("submit", (event) => {
    event.preventDefault(); // Default event prevented
    console.log("whow");
    let scoreInputDOM = document.querySelector('#score');
    localStorage.setItem('score', scoreInputDOM.value);
});
