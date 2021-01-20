//  Include packages needed for this application
// npm install 
const inquirer = require("inquirer");
const generateMarkdown = ("./utils/generateMarkdown.js");
const fs = require("fs");
const util = require("util");

const api = require(".utils/api.js");
// var axios = require("axios");

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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md file has been generated!")
    });
}

const writeFileAsync = util.promisify(writeToFile);
//  Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you. Your responses have been recorded. Please Wait...");

        const userInfo = await api.getUser(userResponses);
        console.log("Your Github username is: ", userInfo);

        console.log("Generating your readme markdown file...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);

        await writeFileAsync('ExampleREADME.md', markdown);
    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
