//  Include packages needed for this application
// npm install 
var inquirer = require("inquirer");
var generateMarkdown = ("./utils/generateMarkdown.js");
var fs = require("fs");
var axios = require("axios");

//  Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//  Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },

    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },

    {
        type: "input",
        message: "What is the name of your Github repo?",
        name: "repo",
    },

    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },

    {
        type: "list",
        message: "What kind of license shouldd your project have?",
        choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
    },

    {
        type: "input",
        message: "what are the required steps to install your project?",
        name: "installation"
    },

    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "tests",
    },

    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },

    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    }
];

//  Create a function to write README file
function writeToFile(fileName, data) { }

//  Create a function to initialize app
function init() { }

// Function call to initialize app
init();
