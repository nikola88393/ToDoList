import './style.css'
import project from './projects';
import task from './task';

let project1 = project('project1');
let project2 = project('project2');
project1.renderProject();
project2.renderProject();

let task1 = task('Project1', '111', '111', '111');
project1.addTask(task1);
let task2 = task('Project2', '222', '222', '222');
project2.addTask(task2);

// project1.renderTasks();


console.log('good job!');