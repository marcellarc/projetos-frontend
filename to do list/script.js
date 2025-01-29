document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTask = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addTaskToList(task.text, task.completed));

    addTask.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTaskToList(taskText);
            saveTask(taskText, false);
            taskInput.value = '';
        }
    });


    function addTaskToList(text, completed = false) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        if (completed) taskItem.classList.add('completed');

        taskItem.innerHTML = `
        <span>${text}</span>
        <button class="delete-task">X</button>
        `;

        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
            updateTask(text, taskItem.classList.contains('completed'));
        });

        taskItem.querySelector('.delete-task').addEventListener('click', (e) => {
            e.stopPropagation();
            removeTask(text);
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
    }

    function saveTask(text, completed) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text, completed });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function updateTask(text, completed) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskIndex = tasks.findIndex(task => task.text === text);
        if (taskIndex > -1) {
            tasks[taskIndex].completed = completed;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    function removeTask(text) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.text !== text);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})