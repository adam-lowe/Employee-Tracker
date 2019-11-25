const mysql = require("mysql");

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
   
   connection.query("SELECT first_name,last_name FROM employee", function (err, res) {
        if (err) throw err;
        console.log('\n');
            console.log(res);
            // for (let i = 0; i < res.length; i++) {
            //     const object = res[i];
            //     console.log(object.first_name)
                
            // }
            const employeeList = [];
            res.forEach(object => {
                employeeList.push(object.first_name + ' ' + object.last_name);
            });
            console.log(employeeList);
    });