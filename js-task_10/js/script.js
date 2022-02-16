let addTaskBtn = document.getElementById('add-task-btn')
let deskTaskInput = document.getElementById('description-task');
let todosWrapper = document.querySelector('.todos-wrapper');

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todoItemElems = [];

function Task(description) {
    this.description = description;
    this.completed = false;
};

let createTemplate = (task, index) => {
    return `
        <div class="todo-item ${task.comleted ? '.checked' : ''}">
            <div class="description">${task.description}</div>
            <div class="buttons">
                <input onclick="completeTask(${index})" class="btn-complete" type="checkbox" ${task.comleted ? 'checked' : ''}>
                <button onclick="editTask(${index})" class="btn-edit">Редактировать</button>
                <button onclick="deleteTask(${index})" class="btn-delete">Удалить</button>
            </div>
        </div>
    `
};

const fillHtmlList = () => {
    todosWrapper.innerHTML = "";
    if(tasks.length > 0) {
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        });
        todoItemElems = document.querySelectorAll('.todo-item');
    };
};

fillHtmlList();

let updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

addTaskBtn.addEventListener('click', () => {
    tasks.push(new Task(deskTaskInput.value));
    updateLocal();
    fillHtmlList();
    deskTaskInput.value = '';
});

const completeTask = index => {
    tasks[index].completed = !tasks[index].completed;
    if(tasks[index].completed) {
        todoItemElems[index].classList.add('checked');
    } else {
        todoItemElems[index].classList.remove('checked');
    };
}
updateLocal();
fillHtmlList();


let deleteTask = index => {
    tasks.splice(index, 1);
    updateLocal();
    fillHtmlList();
}


// НЕ РЕАЛИЗОВАНА КНОПКА РЕДАКТИРОВАТЬ
// let editTask = index => {

//     updateLocal();
//     fillHtmlList();
// }
