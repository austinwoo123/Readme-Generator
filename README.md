# Readme-Generator

## Description
This project was about creating an app that can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project. 

## Table of Contents
1. [Description](#description)
2. [Deployed Link](#deployed-link)
3. [How to Start](#how-to-start)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Acknowledgements](#acknowledgements)

  ## Walkthrough Video
  ![Alt Text](https://austinwoo123.github.io/Readme-Generator/assets/tutorial.gif)

  ## How to Start
Open the index.js file and type the command: "node index.js" in the terminal.
  ## Code Snippet

```
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you. Your responses have been recorded. Please Wait...");

        // const userInfo = await api.getUser(userResponses);
        // console.log("Your Github username is: ", userInfo);

        console.log("Generating your readme markdown file...")
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);

        await writeFileAsync('ExampleREADME.md', markdown);
    } catch (error) {
        console.log(error);
    }
};
```
This code shows how I used an async function to initialize the app and prompt the inquirer questions which wait to pass the responses so that the markdown file can be written.
```
const axios = require("axios");

const api = {
    async getUser(userResponses) {
        try {
            let response = await axios
                .get('https://api.github.com/users/${userResponses.username}');
            return response.data;

        } catch (error) {
            console.log(error)
        }
    }
};
```

This code shows how I am calling the axios dependency to call out and retrieve information from the api github users data. 

## Built with
* Node
* Inquirer
* axios
* git bash
## Licenses
   MIT License

## Author
   Austin Woo
  
## Acknowledgements
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp
