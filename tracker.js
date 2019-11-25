const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table")

const connection = mysql.createConnection({
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

inquirerInit();




function inquirerInit() {
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
    ]).then(function (res) {
        const action = res.action;
        if (action === "Alter Employee List") {
            let objectList = sqlQuery("SELECT first_name,last_name FROM employee");
            let employList = [];
            objectList.forEach(object => {
                employeeList.push(object.first_name + ' ' + object.last_name);
            });
            inquirer.prompt([
                {
                    type: "list",
                    message: "Would you like to Add or Remove an Employee?",
                    name: "addRemoveUpdate",
                    choices: [
                        "Add Employee",
                        "Remove Employee",
                        "Update Employee List"
                    ]
                },
                {
                    type: "list",
                    message: "Would you like to Add or Remove an Employee?",
                    name: "action",
                    choices: employList
                },
            ]).then(function (res) {
                

            });
        }

    });
}

function viewAll(type) {
    switch (type) {

        case 'employ':
            sqlQuery("SELECT employee.id,first_name,last_name,title,department,manager FROM employee INNER JOIN role ON employee.role = role.title;", true);
            break;

        case 'depart':
            sqlQuery("SELECT * FROM department", true);
            break;

        case 'roles':
            sqlQuery("SELECT * FROM role", true);
            break;

        default:
            break;
    }
}

function add() {

}

function update(type) {
    switch (type) {

        case 'role':
            sqlQuery("-->SELECT employee.id,first_name,last_name,title,department,manager FROM employee INNER JOIN role ON employee.role = role.title;");
            break;

        case 'manage':
            sqlQuery("--->SELECT * FROM department");
            break;

        default:
            break;
    }
}

function sqlQuery(request, doCallback) {
    connection.query(request, function (err, res) {
        if (err) throw err;
        console.log('\n');
        if (doCallback === true) {
            console.table(res);
            inquirerInit();
        }
        else {
            return res;
        }
    });
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

// .then(function (response) {
//     const action = response.action;
//     if (action === "Add Employee" || "Remove Employee") {inquirerEmploy();}
//     switch (action) {
//         case "View all employees":
//             viewAll('employ');
//             break;
//         case "View all departments":
//             viewAll('depart');
//             break;
//         case "View all roles":
//             viewAll('roles');
//             break;
//         case "Add Employee":
//             add();
//             break;
//         case "Remove Employee":
//             remove();
//             break;
//         case "Update Employee Role":
//             update('role');
//             break;
//         case "Update Employee Manager":
//             update('manage');
//             break;
//         default:
//             console.log("Error: Can't Determine Choice");
//             break;
//     }
// });