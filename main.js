const taskInput = document.getElementById('new-task')
const addButton = document.getElementById('btn-add-task')
const taskList = document.getElementById('list')

const pendingTasks = document.getElementsByTagName('span')[0]
let taskCounter = 0
let buttonCounter = 1


function addLiToList(e){
    let newTodo = document.createElement('div')
    newTodo.innerHTML = '<span>' + taskInput.value + '</span> <button id="btn-' + buttonCounter + '">Delete ' + buttonCounter + ' </button>'
    
    taskList.appendChild(newTodo)


    const deleteButton = document.getElementById('btn-' + buttonCounter)
    deleteButton.addEventListener('click', deleteTodo)

    taskInput.value =""

    taskCounter++
    pendingTasks.innerText = taskCounter

    buttonCounter++
}

function deleteTodo(e){
    taskList.removeChild(e.currentTarget.parentNode)
    taskCounter--
    pendingTasks.innerText = taskCounter
}

addButton.addEventListener('click', addLiToList)

