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
        {
            type:"list",
            message: "Which license does this project fall under?",
            name: "license",
            choices: [
                "MIT License",
                "Code Project open License (CPOL)",
                "Common Development and Distribution License (CDDL)",
                "Microsoft Public License (Ms-PL)",
                "Mozilla Public License 1.1 (MPL 1.1)",
                "Common Public License Version 1.0 (CPL)",
                "Eclipse Public License 1.0",
                "Apache License, Version 2.0"
            ]
        }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
