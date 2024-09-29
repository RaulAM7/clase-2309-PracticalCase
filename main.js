const taskInput = document.getElementById('new-task')
const addButton = document.getElementById('btn-add-task')
const taskList = document.getElementById('list')

const pendingTasks = document.getElementsByTagName('span')[0]
let taskCounter = 0


function addLiToList(e){
    let newTask = document.createElement('li')
    newTask.innerText = taskInput.value
    taskList.appendChild(newTask)
    taskInput.value =""

    taskCounter++
    pendingTasks.innerText = taskCounter
}

addButton.addEventListener('click', addLiToList)