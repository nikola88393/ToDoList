export default function project(name) {
    let tasks = [];

    const getName = () => {
        return name;
    }

    const renderProject = () => {
        let container = document.getElementById('projectList');
        let project = document.createElement('a');
        project.classList.add('project');
        project.innerHTML = name;
        project.addEventListener('click', () => {
            renderTasks();
        })

        container.appendChild(project);
    }

    const renderTasks = () => {
        let container = document.getElementById('taskContainer');
        container.innerHTML = '';

        tasks.forEach(task => {
            let taskContainer = document.createElement('div');
            taskContainer.classList.add('task');

            let titleElement = document.createElement('h3');
            titleElement.innerHTML = task.title;

            let descriptionElement = document.createElement('p');
            descriptionElement.innerHTML = task.description;

            let dateElement = document.createElement('p');
            dateElement.innerHTML = task.date;

            let priorityElement = document.createElement('p');
            priorityElement.innerHTML = task.priority;

            taskContainer.appendChild(titleElement);
            taskContainer.appendChild(descriptionElement);
            taskContainer.appendChild(dateElement);
            taskContainer.appendChild(priorityElement);
            container.appendChild(taskContainer);
        })

    }

    const addTask = (task) => {
        tasks.push(task);
        renderTasks();
    }

    return {
        name: name,
        getName: getName,
        renderProject: renderProject,
        addTask: addTask,
        renderTasks: renderTasks
    }
}