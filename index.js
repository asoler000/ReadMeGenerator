const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
     {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your Project Title?",
            name: "projectTittle"
        },
        {
            type: "input",
            message: "Provide detail description",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
            name: "installationProcess"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "instruction"
        },
        {
            type: "input",
            message: "Provide instructions examples for use.",
            name: "instructionExample"
        },
        {
            type: "input",
            message: "provide License name ",
            name: "licenseName"
        },
        {
            type: "input",
            message: "provide License url ",
            name: "licenseUrl"
        },
        {
            type: "input",
            message: "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
            name: "contributorsGitUserName"
        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "tests"
        }
  ]);
}
function generateHTML(answers) {
    return `
  
     # Project Title is : ${answers.projectTittle}
     # GitHub username is : ${answers.username}
     ## Project Description :  ${answers.projectDescription}
     ### Installation Process : ${answers.installationProcess}
     #### Instructions :  ${answers.instruction}
     #### Example ${answers.instructionExample}
     #### License name :  ${answers.licenseName}
     #### License url :  ${answers.licenseUrl}
     #### Contributors :  ${answers.contributorsGitUserName}
   
     #### Tests:  ${answers.tests}
     
      
    `;
  }
  
  promptUser()
    .then(function(answers) {
      const html = generateHTML(answers);
  
      return writeFileAsync("README.md", html);
    })
    .then(function() {
      console.log("Successfully wrote to index.html");
    })
    .catch(function(err) {
      console.log(err);
    });