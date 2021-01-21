// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)"
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title : ${data.title}

  ## Project Description:
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  * [License](#license)
  * [Author] (#Author)
  * [Badges](#badges)
  
  ## Installation
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributors
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions
  If you have any questions, please feel free to contact me at ${data.username} on Github.

  ## License
  ${renderLicenseBadge(data.license)}
  

  ## Author
  

  ## Badges


`;
}

module.exports = generateMarkdown;
