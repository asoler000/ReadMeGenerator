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
            type: "checkbox",
            message: "What languages does your project use?",
            name: "languages",
            choices: [
                "HTML__", 
                "CSS__", 
                "JavaScript__", 
                "MySQL__",
                "JQuery__",
                "Ajax__"
              ]
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

    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Read Me</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <div id="badges" style="padding:1em">Languages Used In Project <span class="badge badge-success">${answers.languages}</span></h1>
  <h1 class="display-4" style="background:white; padding:2em">${answers.projectTittle}</h1>
  <h2>Read Me</h2>
  
  <h3>Table Of Contents</h3>
  <h4><a href="#userName">User Name</a></h4></br>
  <h4><a href="#projectTitle">Project Title</a></h4></br>
  <h4><a href="#projectDescription">Project Description</a></h4> </br>
  <h4><a href="#projectInstallation">Project Installation</a></h4></br>
  <h4><a href="#projectInstruction">Project Instruction</a></h4></br>
  <h4><a href="#projectExample">Project Instruction Example</a></h4></br>
  <h4><a href="#projectLicense">Project License</a></h4></br>
  <h4><a href="#projectUrl">Project License URL</a></h4></br>
  <h4><a href="#projectContributors">Project Contributors</a></h4></br>
  <h4><a href="#projectTests">Project Tests</a></h4></br>
<hr>
    <h2 id=projectTitle> Project Title: </h2>${answers.projectTittle} </br>
    <hr>
    <h3 id=userName> GitHub username:</h3> ${answers.username}</br>
    <hr>
    <h3 id=projectDescription> Project Description:</h3>  ${answers.projectDescription} </br>
    <hr>
    <h3 id=projectInstallation>  Installation Process: </h3>${answers.installationProcess} </br>
    <hr>
    <h3 id=projectInstruction>  Instructions: </h3> ${answers.instruction} </br>
    <hr>
    <h3 id=projectExample> Example: </h3>${answers.instructionExample} </br>
    <hr>
    <h3 id=projectLicense>  License Name: </h3>  ${answers.licenseName}</br>
    <hr>
    <h3 id=projectUrl>  License URL: </h3> ${answers.licenseUrl}</br>
    <hr>
    <h3 id=projectContributors> Contributors:</h3>  ${answers.contributorsGitUserName} </br>
    <hr>
   
    <h3 id=projectTests>  Tests: </h3> ${answers.tests} </br>
    <hr>
     
      
      </div>
</div>
</body>
</html>`;
  }
  
  promptUser()
    .then(function(answers) {
      const html = generateHTML(answers);
  
      return writeFileAsync("README.html", html);
    })
    .then(function() {
      console.log("Successfully wrote to README.html");
    })
    .catch(function(err) {
      console.log(err);
    });
