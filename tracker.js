const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table")

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "employees_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

console.log(
" ███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗       \n",
    "██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝        \n",
    "█████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗          \n",
    "██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝          \n",
    "███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗        \n",
    "╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝        \n",
                                                                                 "\n",
     "███╗   ███╗ █████╗ ███╗   ██╗ █████╗  ██████╗ ███████╗██████╗        \n",
    "████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝ ██╔════╝██╔══██╗       \n",
    "██╔████╔██║███████║██╔██╗ ██║███████║██║  ███╗█████╗  ██████╔╝       \n",
    "██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║   ██║██╔══╝  ██╔══██╗       \n",
    "██║ ╚═╝ ██║██║  ██║██║ ╚████║██║  ██║╚██████╔╝███████╗██║  ██║       \n",
     "╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝       \n");

inquirerAction();


function inquirerAction() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: [
                "View all employees",
                "View all employees By department",
                "View all employees By manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager"
            ]
        }
    ]).then(function (response) {
        const action = response.action;
        switch (action) {
            case "View all employees":
                viewAll('employ');
                break;
            case "View all employees By department":
                viewAll('depart');
                break;
            case "View all employees By manager":
                viewAll('manager');
                break;
            case "Add Employee":
                add();
                break;
            case "Remove Employee":
                remove();
                break;
            case "Update Employee Role":
                update('role');
                break;
            case "Update Employee Manager":
                update('manage');
                break;
            default:
                console.log("Error: Can't Determine Choice");
                break;
        }
    });
}

function viewAll(type) {
    connection.query(
        "INSERT INTO auctions SET ?",
        {
        item_name: answer.item,
        category: answer.category,
        starting_bid: answer.startingBid || 0,
        highest_bid: answer.startingBid || 0
        },
        function(err) {
        if (err) throw err;
        console.log("Your auction was created successfully!");
        // re-prompt the user for if they want to bid or post
        start();
        }
    );
      }

function add() {
    
}

function remove() {
    
}

function update(type) {
    
}
// inquirer.prompt([
//     {
//         type: "input",
//         name: "gituser",
//         message: "What is your github username?"
//     },
//     {
//         type: "list",
//         message: "What is your favorite color?",
//         name: "color",
//         choices: [
//         "red",
//         "orange",
//         "yellow",
//         "green",
//         "brown",
//         "purple",
//         "blue"
//         ]
//     }
// ]).then(function (response) {
// const username = response.gituser;
// const favcolor = response.color;
// });
// const queryUrl = `https://api.github.com/users/${username}`;
// axios.get(queryUrl)