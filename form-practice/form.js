let userFormDOM = document.querySelector('#userForm');
let userListDOM = document.querySelector('#userList');
let alertDOM = document.querySelector('#alert')

const alertFunc = (title, message, className) => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

userFormDOM.addEventListener('submit', (event) => {
    event.preventDefault();
    const USER_NAME = document.querySelector('#username');
    const SCORE = document.querySelector('#score');
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = ""
        SCORE.value = ""
    }
    else {
        alertDOM.innerHTML = alertFunc("Missing Information", "Please enter a value", "danger")
    }
});

const addItem = (userName, score) => {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `${userName} 
        <span class="badge badge-primary badge-pill">${score}</span>`;
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM);
}