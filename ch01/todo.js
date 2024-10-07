document.getElementById('todo-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const taskText = this.value.trim();
        if (taskText !== "") {
            addTodo(taskText);
            this.value = '';
        }
    }
});

function addTodo(taskText) {
    const todoList = document.getElementById('todo-list');
    
    const li = document.createElement('li');
    li.textContent = taskText;
    
    const completeBtn = document.createElement('button');
    completeBtn.textContent = '완료';
    completeBtn.classList.add('complete');
    completeBtn.addEventListener('click', function() {
        moveToDone(li, taskText);
    });
    
    li.appendChild(completeBtn);
    todoList.appendChild(li);
}

function moveToDone(todoItem, taskText) {
    const doneList = document.getElementById('done-list');
    
    const li = document.createElement('li');
    li.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    
    li.appendChild(deleteBtn);
    doneList.appendChild(li);
    
    todoItem.remove();
}