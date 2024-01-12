// Initialize variables
let currentProject = {};
const projectsStorageArray = [];
const toDoParameters = ['title', 'dueDate', 'details'];

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

// Function that adds a todo to the toDos array of a particular project and updates projectsStorageArray
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

// Function that removes a todo and updates projectsStorageArray
const removeToDoFromProject = (titleToDo) => {
    
    // From currentProject, search for todo title, and if it is matched, removed that todo from the todo array
    for (let i = 0; i < currentProject['toDos'].length; i++) { 
        if (currentProject['toDos'][i].title === titleToDo) {
            currentProject['toDos'].splice(i, 1);
        }
    }

    // Update projectsStorageArray
    for (let i = 0; i < projectsStorageArray.length; i++) {
        if (projectsStorageArray[i].title === currentProject.title) {
            projectsStorageArray[i] = currentProject;
        }
    }

    return projectsStorageArray;
}

// Search for project title, and if it is matched, removed that project from projectsStorageArray
const removeProjectFromProjectsStorageArray = (projectTitle) => {
    for (let i = 0; i < projectsStorageArray.length; i++) {
        if (projectsStorageArray[i].title === projectTitle) {
            projectsStorageArray.splice(i, 1);
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
const a = addProjectToProjectsStorageArray('Project1');
const b = addProjectToProjectsStorageArray('Project2');
const c = addProjectToProjectsStorageArray('Project3');
removeProjectFromProjectsStorageArray('Project1');
addToDoToProject('Fire', 'b', 'c');
addToDoToProject('Water', 'x', 'y');
addToDoToProject('Air', 'm', 'n');
removeToDoFromProject('Fire');

// DOM - list of all initial document.querySelectors
const selectTopContainer = document.querySelector('#top');
const selectBottomContainer = document.querySelector('#bottom');
const selectBottomLeftContainer = document.querySelector('#bottom-left');
const selectBottomRightContainer = document.querySelector('#bottom-right');
const selectToDosContainer = document.querySelector('#todos');
const selectProjectsContainer = document.querySelector('#projects');
const clickNewProjectButton = document.querySelector('#new-project');
const clickNewToDoButton = document.querySelector('#new-todo');

// DOM - create fieldset to input new project
clickNewProjectButton.addEventListener('click', () => {

    // DOM - temporarily make New Project and New To Do buttons unclickable
    clickNewProjectButton.setAttribute('disabled', 'disabled');
    clickNewToDoButton.setAttribute('disabled', 'disabled');

    // DOM - create fieldset, input box, Submit button, and Cancel button
    const fieldset = document.createElement('fieldset');
    fieldset.setAttribute('id', 'fieldset');
    selectProjectsContainer.appendChild(fieldset);
    const selectFieldsetContainer = document.querySelector('#fieldset');

    const inputBox = document.createElement('input');
    inputBox.setAttribute('id', 'title');
    selectFieldsetContainer.appendChild(inputBox);
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.setAttribute('id', 'submit');
    selectFieldsetContainer.appendChild(submitButton);
    const clickSubmitButton = document.querySelector('#submit');

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.setAttribute('id', 'cancel');
    selectFieldsetContainer.appendChild(cancelButton);
    const clickCancelButton = document.querySelector('#cancel');

    // DOM - functionality of Cancel button
    clickCancelButton.addEventListener('click', () => {
        
        // DOM - removes fieldset
        selectProjectsContainer.removeChild(selectFieldsetContainer);

        // DOM - makes New Project and New To Do buttons clickable again
        clickNewProjectButton.removeAttribute('disabled');
        clickNewToDoButton.removeAttribute('disabled');
    })

    // Functionality of Submit button
    clickSubmitButton.addEventListener('click', () => {

        // Create a new project
        addProjectToProjectsStorageArray(inputBox.value);

        // DOM - display title of new project on page
        const displayProject = document.createElement('div');
        displayProject.textContent = inputBox.value;
        displayProject.setAttribute('class', 'project');
        selectProjectsContainer.appendChild(displayProject);

        // DOM - remove fieldset
        selectProjectsContainer.removeChild(selectFieldsetContainer);

        // DOM - makes New Project and New To Do buttons clickable again
        clickNewProjectButton.removeAttribute('disabled');
        clickNewToDoButton.removeAttribute('disabled');
        
        // DOM - remove currently displayed todo items
        const selectDisplayedToDos = document.querySelectorAll('.displayed-todo');
        selectDisplayedToDos.forEach((displayedToDo) => {
            selectToDosContainer.removeChild(displayedToDo);
        })

        // DOM - display all todo items from current project on page
        for (let i = 0; i < currentProject['toDos'].length; i++) {
            const toDoContainer = document.createElement('div');
            toDoContainer.setAttribute('class', 'displayed-todo');
            const toDo = currentProject['toDos'][i];
            toDoContainer.textContent = `Title: ${toDo.title}, Due Date: ${toDo.dueDate}, Details: ${toDo.details}`;
            selectToDosContainer.appendChild(toDoContainer);
        }
        
    })
})

// DOM - create fieldset to input new todo item
clickNewToDoButton.addEventListener('click', () => {

    // DOM - temporarily make New Project and New To Do buttons unclickable
    clickNewProjectButton.setAttribute('disabled', 'disabled');
    clickNewToDoButton.setAttribute('disabled', 'disabled');
    
    // DOM - create fieldset, input box, Submit button, and Cancel button
    const fieldset = document.createElement('fieldset');
    fieldset.setAttribute('id', 'fieldset');
    selectToDosContainer.appendChild(fieldset);
    const selectFieldsetContainer = document.querySelector('#fieldset');

    // DOM - create inputBox and label for each parameter, as well as a container for every parameter, for todo item
    for (let i = 0; i < toDoParameters.length; i++) {

        const inputContainer = document.createElement('div');
        inputContainer.setAttribute('id', 'todo' + i);
        selectFieldsetContainer.appendChild(inputContainer);

        const label = document.createElement('label');
        label.setAttribute('for', toDoParameters[i]);
        label.textContent = toDoParameters[i];
        inputContainer.appendChild(label);

        const inputBox = document.createElement('input');
        inputBox.setAttribute('type', 'text');
        inputBox.setAttribute('id', toDoParameters[i]);
        inputBox.setAttribute('name', toDoParameters[i]);
        inputBox.setAttribute('class', 'input');
        inputContainer.appendChild(inputBox);
    }

    // DOM - create Submit and Cancel buttons
    
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.setAttribute('id', 'submit');
    selectFieldsetContainer.appendChild(submitButton);
    const clickSubmitButton = document.querySelector('#submit');

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.setAttribute('id', 'cancel');
    selectFieldsetContainer.appendChild(cancelButton);
    const clickCancelButton = document.querySelector('#cancel');
    
    // DOM - functionality of Cancel button
    clickCancelButton.addEventListener('click', () => {
        
        // DOM - removes fieldset
        selectToDosContainer.removeChild(selectFieldsetContainer);

        // DOM - makes New Project and New To Do buttons clickable again
        clickNewProjectButton.removeAttribute('disabled');
        clickNewToDoButton.removeAttribute('disabled');
    })
    
    // Functionality of Submit button
    clickSubmitButton.addEventListener('click', () => {

        // Initialize empty array for fieldset arguments
        const argumentsNewestToDo = [];

        // Get values from all inputBox's and push to argumentsNewestToDo array
        for (let i = 0; i < toDoParameters.length; i++) {
            const selectInputBox = document.querySelector('#' + toDoParameters[i]);
            argumentsNewestToDo.push(selectInputBox.value);
        }
        
        // Create and add newest todo to current project (I DON'T like how this is hard-coded, but sticking with it for now)
        addToDoToProject(argumentsNewestToDo[0], argumentsNewestToDo[1], argumentsNewestToDo[2]);

        // DOM - remove fieldset
        selectToDosContainer.removeChild(selectFieldsetContainer);
        
        // DOM - remove currently displayed todo items
        const selectDisplayedToDos = document.querySelectorAll('.displayed-todo');
        selectDisplayedToDos.forEach((displayedToDo) => {
            selectToDosContainer.removeChild(displayedToDo);
        })

        // DOM - display all todo items from current project on page
        for (let i = 0; i < currentProject['toDos'].length; i++) {
            const toDoContainer = document.createElement('div');
            toDoContainer.setAttribute('class', 'displayed-todo');
            const toDo = currentProject['toDos'][i];
            toDoContainer.textContent = `Title: ${toDo.title}, Due Date: ${toDo.dueDate}, Details: ${toDo.details}`;
            selectToDosContainer.appendChild(toDoContainer);
        }

        // DOM - makes New Project and New To Do buttons clickable again
        clickNewProjectButton.removeAttribute('disabled');
        clickNewToDoButton.removeAttribute('disabled');       
    })
})