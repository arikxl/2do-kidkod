const ipt = document.getElementById('ipt');
const list = document.getElementById('list');


// const todos = [
//     {
//         task: 'eat',
//         isDone: false
//     },
//     {
//         task: 'sleep',
//         isDone: false
//     },
//     {
//         task: 'code',
//         isDone: true
//     },
// ]

ipt.style.display = 'none'

const todos = JSON.parse(localStorage.getItem('kidkod-todos'))|| [];

function toggleForm() {
    if (ipt.style.display == 'none') {
        ipt.style.display = 'block';
        ipt.focus();
    } else {
        ipt.style.display = 'none';
    }
}

function showTodos() { 

    
    list.innerHTML = todos.map((todo, index) => {
        return (
            `<li id=todo${index}>
            <button onclick="TodoIsDone(${index})">✔️</button>
            <p class=${todo.isDone ? 'done' : ''}> ${todo.task}</p>
            <button onclick="deleteTodo(${index})">🗑️</button>
            </li>`
        )
    }).join('');
}

showTodos()


function deleteTodo(index) { 
    todos.splice(index, 1);
    localStorage.setItem('kidkod-todos', JSON.stringify(todos));
    showTodos()
}

function TodoIsDone(index) { 
    todos[index].isDone = !todos[index].isDone;
    localStorage.setItem('kidkod-todos', JSON.stringify(todos));
    showTodos()
}

function createTodo(e) {
    e.preventDefault();
    if(ipt.value ==='')return
    newTodo = {
        task: ipt.value,
        isDone: false
    };
    todos.push(newTodo);
    localStorage.setItem('kidkod-todos', JSON.stringify(todos));
    ipt.value = ''
    showTodos()
}