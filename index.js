// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
const { type } = require('express/lib/response');


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            message:"What will the title of your project be?",
            n,ame: "title"
        },
        {
            type: "input",
            message: "Enter description of your project:",
            name: "description"
        },
        {
            type: "input",
            message: "Enter installation instruction as a comma seperated list:",
            name: "install"
        },
        {
            type: "input",
            message: "Enter the contribution guidelines for your project:",
            name: "contribution"
        },
        {
            type: "input",
            message: "Enter the usage information for you project:",
            name:"usage"
        },
        {
            type: "input",
            message: "Enter your GitHub username:",
            name: "github"
        },
        {
            type: "input",
            message: "Enter your email address:",
            name: "email"
        },
        
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
