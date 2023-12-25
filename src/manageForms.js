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

    return {
        displayProjectForm,
        displayTaskForm,
        getProjectInfo
    }

})();

export default manageForms;