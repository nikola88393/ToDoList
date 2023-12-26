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
        manageForms.setProjectSelectElement();
        console.log(getProjects());
        renderProjects();
        manageForms.displayProjectForm();

    });

    const createTaskBtn = document.getElementById('createTask');

    createTaskBtn.addEventListener('click', () => {
        let args = manageForms.getTaskInfo();
        let newTask = task(args.title, args.description, args.date, args.priority, args.project);
        tasks.push(newTask);
        renderTasks();
        manageForms.displayTaskForm();
    });

    // for testing purposes
    const createExampleProjects = () => {
        for (let i = 1; i < 4; i++) {
            let newProject = project(`test${i}`);
            projects.push(newProject);
            manageForms.setProjectSelectElement();
            console.log(getProjects());
            renderProjects();
            manageForms.displayProjectForm();
        }
    }

    const createExampleTasks = () => {
        for (let i = 1; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                let newTask = task(`test${j}`, `test`, '11/11/1111', 'normal', `test${i}`);
                tasks.push(newTask);
                renderTasks();
                manageForms.displayTaskForm();
            }
        }
    }

    // for testing purposes

    const getProjects = () => {
        return projects;
    }

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
        getProjects,
        renderProjects,
        renderTasks,
        logArrays,
        createExampleProjects,
        createExampleTasks
    };
})();

export default manageContent;
