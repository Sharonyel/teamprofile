const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");

var teamMember = [];

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
            message: "Role",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
    
    ]).then(function ({ name, email, id, role }){
        
        if (role === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "School",
                    name: "school"
                }
            ]).then(function ({ school }){
                const Member = new Intern(name, id, email, school);
                teamMember.push(Member);
                console.log(Member);

            })
        }

        if (role === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Office Number",
                    name: "officeNum"
                }
            ]).then(function({ officeNum } ){
                const Member = new Manager(name, id, email, officeNum);
                teamMember.push(Member);
                console.log(Member)
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
                teamMember.push(Member);
                console.log(Member)
            })
        }



    }
)}

promptUser();