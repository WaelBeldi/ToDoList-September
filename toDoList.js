// ToDo List
let todoList = [
    {id: 1, text: "Workshop", completed: false},
    {id: 2, text: "Lunch", completed: true},
    {id: 3, text: "Dinner", completed: false}
];

// Function to add a ToDo
function addTodo() {
    let inputElement = document.getElementById("newTodo");
    let todoText = inputElement.value

    if (todoText.trim() !== "") {
        const newTodo = {id: Date.now(), text: todoText.trim(), completed: false}
        todoList.push(newTodo)
        // display todos
        displayTodo(newTodo)
        console.log(todoList);
        inputElement.value = ""
    }
}

// Function to display todos
function displayTodo(todo) {
    const todoListElement = document.getElementById("todoList")

    const li = document.createElement("li")
    li.innerHTML = `
    <input type="checkbox" ${todo.completed ? "checked" : ""} onclick="toggleCompleted(${todo.id})">
    <span>${todo.text}</span>
    <button style="margin-left: auto" onclick="deleteTodo(${todo.id})">Delete</button>
    `

    todoListElement.appendChild(li)
}

// Function to toggle the completed status
function toggleCompleted(id) {
    let todoToUpdate = {}
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === id) {
            todoToUpdate = todoList[i]
        }
    }

    if (todoToUpdate) {
        todoToUpdate.completed = !todoToUpdate.completed
        // refresh
        refreshTodoList()
        console.log(todoList);
    }
}

// Function to delete a todo
function deleteTodo(id) {
    let index = -1
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === id) {
            index = i
        }
    }

    if (index !== -1) {
        todoList.splice(index, 1)
        // refresh
        refreshTodoList()
        console.log(todoList);
    }
}

// Function to refresh the displayed todos after delete
function refreshTodoList() {
    const todoListElement = document.getElementById("todoList")
    todoListElement.innerHTML = ""
    for (let i = 0; i < todoList.length; i++) {
        displayTodo(todoList[i])
    }
}