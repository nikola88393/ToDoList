import task from "./task";
import project from "./projects";
import manageForms from "./manageForms";

//This module is intended to store all projects and tasks.
// It also handles event clickers for creating new objects of those types
const manageContent = (function () {
    let projects = [];
    let tasks = [];

    const createProjectBtn = document.getElementById('createProject');

    createProjectBtn.addEventListener('click', () => {
        let newProject = project(manageForms.getProjectInfo());
        projects.push(newProject);
        renderProjects();
        manageForms.displayProjectForm();

    });

    const createTaskBtn = document.getElementById('createTask');

    createTaskBtn.addEventListener('click', () => {
        let newTask = task('test', 'test', 'test', 'test', 'test');
        tasks.push(newTask);
        console.log(tasks);
        renderTasks();
        manageForms.displayTaskForm();
    });

    const renderProjects = () => {
        let container = document.getElementById('projectList');
        container.innerHTML = '';

        projects.forEach(proj => {
            proj.renderProject();
        });
    };

    const renderTasks = () => {
        let container = document.getElementById('tasks');
        container.innerHTML = '';

        tasks.forEach(tas => {
            tas.renderTask();
        });
    };

    const logArrays = () => {
        console.log(projects);
        console.log('-----------------');
        console.log(tasks);
    }

    return {
        renderProjects,
        renderTasks,
        logArrays
    };
})();

export default manageContent;
