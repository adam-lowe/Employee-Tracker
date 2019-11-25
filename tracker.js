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
                "View all departments",
                "View all roles",
                "Alter Employee List"
            ]
        }
    ]).then(function (response) {
        const action = response.action;
        switch (action) {
            case "View all employees":
                sqlQuery("SELECT employee.id,first_name,last_name,title,department,manager FROM employee INNER JOIN role ON employee.role = role.title;", true, inquirerAction);
                break;
            case "View all departments":
                sqlQuery("SELECT * FROM department", true, inquirerAction);
                break;
            case "View all roles":
                sqlQuery("SELECT * FROM role", true, inquirerAction);
                break;
            case "Alter Employee List":
                alterData();
                break;
            default:
                console.log("Error: Can't Determine Choice");
                break;
        }
    });
}

function alterData() {
    inquirer.prompt(
        {
            type: "list",
            message: "How would you like to alter the employee list?",
            name: "alter",
            choices: [
                "Remove Employee",
                "Add Employee",
                "Update Employee's Role",
                "Update Employee's Manager"
            ]
        }
    ).then(function (response) {
       const alterType = response.alter;

       switch (alterType) {
        case "Remove Employee":
            break;
        case "Add Employee":
            break;
        case "Update Employee's Role":
            break;
        case "Update Employee's Manager":
            break;
        default:
            console.log("Error: Can't Determine Choice");
            break;
    }
        }
    );
}

function sqlQuery(request, log, cb) {
    connection.query(request, function (err, res) {
        if (err) throw err;
        console.log('\n');
        if (log) { console.table(res); }
        if (cb) { cb(); }
        return res;
    });
}