const taskInput = document.getElementById('new-task')
const addButton = document.getElementById('btn-add-task')
const taskList = document.getElementById('list')


function addLiToList(e){
    let newTask = document.createElement('li')
    newTask.innerText = taskInput.value
    taskList.appendChild(newTask)
    taskInput.value =""
}

addButton.addEventListener('click', addLiToList)