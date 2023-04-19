const {
    error
} = require('console');
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([{
        message: "Enter your name",
        name: "username",
        type: "input",

    }, {
        message: "Enter your location",
        name: "location",
        type: "input",

    }, {
        message: "Enter your bio",
        name: "bio",
        type: "input",

    }, {
        message: "Enter your Linkedein",
        name: "Linkedin",
        type: "input",

    }, {
        message: "Enter your Github",
        name: "Github",
        type: "input",

    }, ])

    .then(function(response) {
        fs.writeFile("portfolio.html",
            `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./assets/css/style.css">
            <title>Portfolio</title>
        </head>
        
        <body>
            <h1>${response.username}</h1>
            <h2>${response.location}</h2>
            <p>${response.bio}</p>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/${response.Linkedin}">Linkedin</a>
                </li>
                <li>
                    <a href="https://www.githum.com/${response.Github}">Github</a>
                </li>
            </ul>
        
        </body>
        
        </html>`,
            function (error) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("portfolio has been created");
                }
            }
        )

    });