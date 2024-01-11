// Initialize variables
let currentProject = "";
const projectsStorageArray = [];

// Project factory
const ProjectFactory = (projectTitle) => {
    return {
        title: projectTitle,
        toDos: [],
    };
}

// Function that adds a project to the projectsStorageArray and updates projectsStorageArray
const addProjectToProjectsStorageArray = (projectTitle) => {

    // Create project
    const newestProject = ProjectFactory(projectTitle);

    // currentProject becomes the newestProject
    currentProject = newestProject

    // Push newestProject to storage array
    projectsStorageArray.push(newestProject);

    // Return updated projectsStorageArray
    return projectsStorageArray;
}

// Function that adds a todo to the toDos array of a particular project
const addToDoToProject = (titleToDo, dueDateToDo, detailsToDo) => {

    // Create todo
    const newestToDo = ToDoFactory(titleToDo, dueDateToDo, detailsToDo);

    // Push project to current project's toDos
    currentProject['toDos'].push(newestToDo);

    // Update projectsStorageAray with currentProject
    for (let i = 0; i < projectsStorageArray.length; i++) {
        if (currentProject.title === projectsStorageArray[i].title) {
            projectsStorageArray[i] = currentProject;
        }
    }

    // Return updated projectsStorageArray
    return projectsStorageArray
}

// Search for project title, and if it is matched, removed that project from projectsStorageArray
const removeProjectFromProjectsStorageArray = (projectTitle) => {
    for (let i = 0; i < projectsStorageArray.length; i++) {
        if (projectsStorageArray[i].title === projectTitle) {
            const indexToRemove = projectsStorageArray.indexOf(projectsStorageArray[i]);
            projectsStorageArray.splice(indexToRemove, 1);
        }
    }
    return projectsStorageArray;
}

// ToDo Factory
const ToDoFactory = (title, dueDate, details) => {
    return {
        title,
        dueDate,
        details,
    };
}

// Trial stuff to make sure Javascript functionality works
const a = addProjectToProjectsStorageArray('AAAA');
const b = addProjectToProjectsStorageArray('BBB');
const c = addProjectToProjectsStorageArray('CC');
console.log(projectsStorageArray);
removeProjectFromProjectsStorageArray('AAAA');
console.log(projectsStorageArray);
addToDoToProject('Fire', 'b', 'c');
addToDoToProject('Water', 'x', 'y');
console.log(projectsStorageArray);

// DOM - list of all initial document.querySelectors
const selectTopContainer = document.querySelector('#top');
const selectBottomContainer = document.querySelector('#bottom');
const selectBottomLeftContainer = document.querySelector('#bottom-left');
const selectBottomRightContainer = document.querySelector('#bottom-right');
const selectToDosContainer = document.querySelector('#todos');
const selectProjectsContainer = document.querySelector('#projects');
const clickNewProjectButton = document.querySelector('#new-project');
const clickNewToDoButton = document.querySelector('#new-todo');