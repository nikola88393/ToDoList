import manageContent from "./manageContent";

const manageForms = (function () {
    let createTaskBtn = document.getElementById('addNewTask');
    let createProjectBtn = document.getElementById('addNewProject');

    const displayTaskForm = () => {
        clearTaskForm();
        let form = document.getElementById('taskFormContainer');
        form.style.display = (window.getComputedStyle(form).display === 'none') ? 'block' : 'none';
    }

    const displayProjectForm = () => {
        clearProjectForm();
        let form = document.getElementById('projectFormContainer');
        form.style.display = (window.getComputedStyle(form).display === 'none') ? 'block' : 'none';
    }

    createTaskBtn.addEventListener('click', displayTaskForm);
    createProjectBtn.addEventListener('click', displayProjectForm);

    const clearTaskForm = () => {
        let form = document.getElementById('taskForm');
        form.reset();
    }

    const clearProjectForm = () => {
        let form = document.getElementById('projectForm');
        form.reset();
    }

    const getProjectInfo = () => {
        let title = document.querySelector('#projectForm input').value;
        return title;
    }

    const getTaskInfo = () => {
        let title = document.querySelector('#taskForm input').value;
        let description = document.querySelector('#taskForm textarea').value;
        let date = document.querySelector('#date').value;
        let priority = document.querySelector('#priority').value;
        let project = document.querySelector('#projectName').value;

        return {
            title,
            description,
            date,
            priority,
            project
        }
    }

    const setProjectSelectElement = () => {
        let selectELement = document.getElementById('projectName');
        selectELement.innerHTML = '';
        let options = manageContent.getProjects();
        console.log(options);

        options.forEach((option) => {
            let opt = document.createElement('option');
            opt.value = option.getName();
            opt.innerHTML = option.getName();
            selectELement.appendChild(opt);
        })

    }

    return {
        displayProjectForm,
        displayTaskForm,
        getProjectInfo,
        getTaskInfo,
        setProjectSelectElement
    }

})();

export default manageForms;