const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
var util = require('util');
var fs = require("fs");

const writeFileAsync = util.promisify(fs.writeFile);

// array to hold all team members
var employees = [];

// User enter prompts for information

function promptUser(){
    inquirer.prompt([
        {
            type: "input",
            message: "Employee Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Email:",
            name: "email"
        },
        {
            type: "input",
            message: "Id",
            name: "id"
        },
        {
            type: "list",
            message: "Select Role",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
    
    ]).then(function ({ name, id, email, role }){
        
        if (role === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "School",
                    name: "school"
                }
            ]).then(function ({ school }){
                const Member = new Intern(name, id, email, school);
                employees.push(Member);
                 
                addMember();

            })
        }

        if (role === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Office Number",
                    name: "officeNumber"
                }
            ]).then(function({ officeNumber } ){
                const Member = new Manager(name, id, email, officeNumber);
                employees.push(Member);

                addMember();
            })
        }

        if (role === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Github:",
                    name: "github"
                }
            ]).then(function({ github } ){
                const Member = new Engineer(name, id, email, github);
                employees.push(Member);
                 
                addMember();
            })
        }
    }
)}

// promt to add another member, if no more then generate HTML

function addMember(){
    inquirer.prompt([
        {
            type: "list",
            message: "Enter another member?",
            name: "addMember",
            choices: [
                "Yes",
                "No"
            ]
        }
    ]).then(function({ addMember }){
        if (addMember === "Yes") {
            promptUser();
        }
            else {
            const teamHTML = generateHTML();
             writeFileAsync("./templates/main.html", teamHTML);
         
            }
        }
    )
}

// Generate HTML using data from each role

function generateHTML() {
    var cards = [];
    employees.forEach(function(employee){
        cards.push(employee.generateHTML())
    })
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </head>
     <style>
      .card-body{
        padding: 10px;
        }
      .wrapper{
        padding: 5px;
        display: inline-block;
        }
      h5.card-title, i, p, h1{
        color: white;
        }
      </style>

    <body>
        <div class="jumbotron" style="background-color: red; text-align: center;">
            <h1 class="display-4">My Team</h1>
          </div>
        <div class="container">
        <br>
        ${cards.join(" ")}
              </div>
    
    </body>
    </html>`
}


promptUser();


