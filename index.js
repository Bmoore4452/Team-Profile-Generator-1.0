const inquirer = require("inquirer");
const fs = require("fs");
const manager = require("./lib/Manager");

const generateHtml = ({ manName, employeeId, emailOne, officeNumber }) =>
  `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <header class="text-bg-danger p-3 d-flex justify-content-center">My Team</header>
    <div class="container d-grid m-auto w-100 p-3">
        <div class="d-flex m-auto gap-5">
            <div class="card border-danger border-3 mb-3" style="max-width: 18rem;">
                <div class="text-start m-auto">${manName}</div>
                <div class="text-start m-auto">Manager</div>
                <div class="card-body bg-dark text-danger">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:${employeeId}</li>
                        <li class="list-group-item">Email:<a href="mailto:${emailOne}">${emailOne}</a></li>
                        <li class="list-group-item">Office number:${officeNumber}</li>
                    </ul>
                </div>
            </div>
            <div class="card border-danger border-3 mb-3" style="max-width: 18rem;">
                <div class="text-start m-auto">Header</div>
                <div class="text-start m-auto">Header</div>
                <div class="card-body bg-dark text-danger">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>
            <div class="card border-danger border-3 mb-3" style="max-width: 18rem;">
                <div class="text-start m-auto">Header</div>
                <div class="text-start m-auto">Header</div>
                <div class="card-body bg-dark text-danger">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="container d-grid w-100 p-3 m-auto">
        <div class="d-flex m-auto gap-5">
            <div class="card border-danger border-3 mb-3" style="max-width: 18rem;">
                <div class="text-start m-auto">Header</div>
                <div class="text-start m-auto">Header</div>
                <div class="card-body bg-dark text-danger">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>
            <div class="card border-danger border-3 mb-3" style="max-width: 18rem;">
                <div class="text-start m-auto">Header</div>
                <div class="text-start m-auto">Header</div>
                <div class="card-body bg-dark text-danger">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`;

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "manName",
//       message: "What is the team manager's name?",
//     },
//     {
//       type: "input",
//       name: "employeeId",
//       message: "What is your ID number?",
//     },
//     {
//       type: "input",
//       name: "emailOne",
//       message: "What is your email address?",
//     },
//     {
//       type: "input",
//       name: "officeNumber",
//       message: "What is your office number?",
//     },
//     {
//       type: "list",
//       name: "teamList",
//       message: "Select the members of your team:",
//       choices: ["Engineer","Intern"],

//     },
//   ])
//   .then((answers) => {
//     const htmlPageContent = generateHtml(answers);

//     fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
//       err ? console.log(err) : console.log("Successfully created index.html!")
//     );
//   });



const engineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engName",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is your ID number?",
      },
      {
        type: "input",
        name: "emailTwo",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your Github User name?",
      },
    ])
    .then((answer) => {});
};
const employee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamList",
        message: "Select the new member of your team:",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((answer) => {
      if (answer.teamList === "Engineer") {
        engineer();
      }
    });
};

const manager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "manName",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your ID number?",
      },
      {
        type: "input",
        name: "emailOne",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
      {
        type: "confirm",
        name: "newMember",
        message: "Do you want to add a new member?",
      },
    ])
    .then((answer) => {
      if (answer.newMember === true) {
        employee();
      }
    });
};



manager();
