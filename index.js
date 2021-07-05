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
        .then(function ({ name, job, id, email }) {
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
                .then(function ({ jobSpec, moreMembers }) {
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
                        .then(function () {
                            if (moreMembers === "Y") {
                                addMember();
                            } else {
                                finishHtml();
                            }
                        });

                });
        });
}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"/>
        <title>Team Profile</title>
    <body>
    <div class="col-12 jumbotron mb-3 bg-dark text-white">
    <h1 class="text-center">TEAM PROFILE</h1>
</div>
</br>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./dist/team-output.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
}

function addHtml(member) {


    return new Promise(function (resolve, reject) {
        const name = member.getName();
        const job = member.getjob();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (job === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-4">
            <div class="card shadow-lg p-3 bg-light roundedmx-auto mb-3" style="width: 300px">
            <h5 class="card-header bg-info text-light">${name}<br /><br /><i class="fa fa-cogs"></i> Engineer</h5>            
                <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa fa-id-card"></i> # ${id}</li>
                <li class="list-group-item"><i class="fa fa-envelope"></i>  <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item"><i class="fa fa-code"></i> GitHub: <a href="https://github.com/${gitHub}">${gitHub}</a></li>
            </ul>            
            </div>
        </div>`;
        } else if (job === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-4">
            <div class="card shadow-lg p-3 bg-light roundedmx-auto mb-3" style="width: 300px">
            <h5 class="card-header bg-info text-light">${name}<br /><br /><i class="fas fa-user-graduate"></i> Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fas fa-id-card"></i> # ${id}</li>
                <li class="list-group-item"><i class="fa fa-envelope"></i>  <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item"><i class="fas fa-graduation-cap"></i> ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const phoneNo = member.getPhoneNo();
            data = `<div class="col-4">
            <div class="card shadow-lg p-3 bg-light roundedmx-auto mb-3" style="width: 300px">
            <h5 class="card-header bg-info text-light">${name}<br /><br /><i class="fas fa-mug-hot"></i> Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fas fa-id-card"></i> # ${id}</li>
                <li class="list-group-item"><i class="fa fa-envelope"></i>  <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item"><i class="fas fa-phone"></i>  ${phoneNo}</li>
            </ul>
            </div>
        </div>`
        }
        fs.appendFile("./dist/team-output.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });






} 

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/team-output.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Team Profile Completed");
}

init();