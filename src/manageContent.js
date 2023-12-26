import task from "./task";
import project from "./projects";
import manageForms from "./manageForms";
import filterContent from "./filterContent";

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
        renderProjects();
        filterContent();
        manageForms.displayProjectForm();

    });

    const createTaskBtn = document.getElementById('createTask');

    createTaskBtn.addEventListener('click', () => {
        let args = manageForms.getTaskInfo();
        let newTask = task(args.title, args.description, args.date, args.priority, args.project);
        tasks.push(newTask);
        // renderTasks(tasks);
        manageForms.displayTaskForm();
    });

    // for testing purposes
    const createExampleProjects = () => {
        for (let i = 1; i < 4; i++) {
            let newProject = project(`test${i}`);
            projects.push(newProject);
            manageForms.setProjectSelectElement();
            renderProjects();
            manageForms.displayProjectForm();
        }
    }

    const createExampleTasks = () => {
        for (let i = 1; i < 4; i++) {
            // for (let j = 1; j < 4; j++) {
            let newTask = task(`test${i}`, `test`, '11/11/1111', 'normal', `test${i}`);
            tasks.push(newTask);
            // renderTasks(tasks);
            manageForms.displayTaskForm();
            // }
        }
    }

    // -----------------

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

    const renderTasks = (tasks) => {
        let container = document.getElementById('tasks');
        container.innerHTML = '';
        if (tasks.length) {
            tasks.forEach(tas => {
                tas.renderTask();
            });
        }
        else {
            let empty = document.createElement('p');
            empty.innerHTML = 'No tasks for the current project.';
            container.appendChild(empty);
        }

    };

    const returnTasks = (project) => {
        let projectTasks = [];

        tasks.forEach(task => {
            if (task.getProject() === project) {
                projectTasks.push(task);
            }
        })

        return projectTasks;
    }

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
        createExampleTasks,
        returnTasks
    };
})();

export default manageContent;
