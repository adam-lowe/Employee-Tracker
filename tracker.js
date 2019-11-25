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
                viewData('employ');
                break;
            case "View all departments":
                viewData('depart');
                break;
            case "View all roles":
                viewData('roles');
                break;
            case "Alter Employee List":
                alterDataInit();
                break;
            default:
                console.log("Error: Can't Determine Choice");
                break;
        }
    });
}

function alterDataInit() {
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
            alterData('remove');
            break;
        case "Add Employee":
            alterData('add');
            break;
        case "Update Employee's Role":
            alterData('updateRole');
            break;
        case "Update Employee's Manager":
            alterData('updateManager');
            break;
        default:
            console.log("Error: Can't Determine Choice");
            break;
    }
        }
    );
}


function viewData(type) {
    switch (type) {

        case 'employ':
            sqlQuery("SELECT employee.id,first_name,last_name,title,department,manager FROM employee INNER JOIN role ON employee.role = role.title;", true, inquirerAction);
            break;

        case 'depart':
            sqlQuery("SELECT * FROM department", true, inquirerAction);
            break;

        case 'roles':
            sqlQuery("SELECT * FROM role", true, inquirerAction);
            break;

        default:
            break;
    }
}

function alterData(type) {
    switch (type) {

        case 'employ':
            sqlQuery("SELECT employee.id,first_name,last_name,title,department,manager FROM employee INNER JOIN role ON employee.role = role.title;", true, inquirerAction);
            break;

        case 'depart':
            sqlQuery("SELECT * FROM department", true, inquirerAction);
            break;

        case 'roles':
            sqlQuery("SELECT * FROM role", true, inquirerAction);
            break;

        default:
            break;
    }
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