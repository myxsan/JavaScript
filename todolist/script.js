const taskDOM = document.querySelector('#task')
const listDOM = document.querySelector('#list')
const toastDOM = document.querySelector('#liveToast')
const listClassList = "d-flex justify-content-between align-items-center"
const createItem = (text, index) => `<div class="d-flex justify-content-between align-items-center">
${text}<span id="del-${index}" class="del-button"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></span>
</div>` 

let todos = []
window.onload = () => {
    for (let i = 0; i < JSON.parse(localStorage.getItem('length')); i++) {
        todos.push(JSON.parse(localStorage.getItem(`li-${i}`)))
    }
    todos.forEach(x => {
        let element = document.createElement('li')
        element.innerHTML = x
        element.onclick = () => test(element)
        listDOM.append(element)
        let idx = todos.indexOf(x)
        document.getElementById(`del-${idx}`).onclick = () => removeElement(idx)
    })
}

const test = (element) => {
    if (!element.classList.contains('bg-primary')) {
        element.classList.add('bg-primary')
        element.classList.add('overlined')
    }
    else {
        element.classList.remove('bg-primary')
        element.classList.remove('overlined')
    }
}

function newElement() {
    let element = document.createElement('li')
    if (String(taskDOM.value).trim() != "") {
        let idx = todos.length
        element.id = `li-${idx}`
        let content = createItem(taskDOM.value, idx)
        element.innerHTML = content
        element.onclick = () => test(element)
        todos.push(element)
        listDOM.append(element)
        localStorage.setItem('length', JSON.stringify(todos.length))
        localStorage.setItem(`${element.id}`, JSON.stringify(element.innerHTML))
        $('#liveToast-alert').toast('show')
        document.getElementById(`del-${idx}`).onclick = () => removeElement(idx)
    }
    else {
        $('#liveToast-danger').toast('show')
    }
    taskDOM.value = ""
}

function removeElement(idx) {
    let element = todos[idx]
    todos = todos.filter(x => x !== element)
    setLocalStorage(todos)
    element.remove()
}

function setLocalStorage(list) {
    localStorage.clear();
    localStorage.setItem('length', list.length)
    list.forEach(x => {
        let idx = list.indexOf(x)
        localStorage.setItem(`li-${idx}`, list[idx])
    })
}