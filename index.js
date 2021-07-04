const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function init() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Member name:",
        name: "name"
        
    },
    {
        type: "list",
        message: "Member's position:",
        choices: [
            "Intern",
            "Engineer",
            "Manager"
        ],
        name: "job"
    },
    {
        message: "Member ID number:",
        name: "id"
    },
    {
        message: "Member email:",
        name: "email"
    }])
    .then(function({name, job, id, email}) {
        let jobSpec = "";
        if (job === "Engineer") {
            jobSpec = "GitHub name";
        } else if (job === "Intern") {
            jobSpec = "School";
        } else {
            jobSpec = "Phone number";
        }
        inquirer.prompt([{
            message: `Member's ${jobSpec}:`,
            name: "jobSpec"
        },
        {
            type: "list",
            message: "Add another member?",
            choices: [
                "Y",
                "N"
            ],
            name: "moreMembers"
        }])
        .then(function({jobSpec, moreMembers}) {
            let newMember;
            if (job === "Engineer") {
                newMember = new Engineer(name, id, email, jobSpec);
            } else if (job === "Intern") {
                newMember = new Intern(name, id, email, jobSpec);
            } else {
                newMember = new Manager(name, id, email, jobSpec);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "Y") {
                    addMember();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}
