// This module is intended to create new tasks and manage methods withing those tasks
export default function task(title, description, date, priority, project) {
    const getTitle = () => title;
    const getDescription = () => description;
    const getDate = () => date;
    const getPriority = () => priority;
    const getProject = () => project;

    const renderTask = () => {
        let container = document.getElementById('tasks');

        let taskContainer = document.createElement('div');
        taskContainer.classList.add('task');

        let titleElement = document.createElement('h3');
        titleElement.innerHTML = title;

        let descriptionElement = document.createElement('p');
        descriptionElement.innerHTML = description;

        let dateElement = document.createElement('p');
        dateElement.innerHTML = date;

        let priorityElement = document.createElement('p');
        priorityElement.innerHTML = priority;

        taskContainer.appendChild(titleElement);
        taskContainer.appendChild(descriptionElement);
        taskContainer.appendChild(dateElement);
        taskContainer.appendChild(priorityElement);

        container.appendChild(taskContainer);
    }

    return {
        title,
        description,
        date,
        priority,
        project,
        getTitle,
        getDescription,
        getDate,
        getPriority,
        getProject,
        renderTask
    };
}