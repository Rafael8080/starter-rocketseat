var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('lis_todos')) || [];
console.log(todos)

// Se vai reultilizar , usa uma função
function renderTodos() {

    for (todo of todos) {

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        var linkText = document.createTextNode('excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);


        listElement.appendChild(todoElement);


    }

}

renderTodos();

function addTodo() {

    listElement.innerHTML = '';

    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();

}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {

    listElement.innerHTML = '';

    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();

}

function saveToStorage() {

    localStorage.setItem('lis_todos', JSON.stringify(todos))

}