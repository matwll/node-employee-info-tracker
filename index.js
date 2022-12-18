const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require("console.table");
const mysql = require('mysql2');
const sequelize = require('./config/connection');

inquirer.prompt([
  {
    type: "list",
    name: "choice",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
    ],
  },
]).then(answer => {
    console.log(answer);
});

if(choice.choice === 'View all departments'){
    connection.execute('show department');
}else if(choice.choice === 'View all roles'){
    connection.execute('show role');
}else if(choice.choice === 'View all employees'){
    connection.execute('show employee');
}else if(choice.choice === 'Add a department'){
    
}else if(choice.choice === 'Add a role'){
    
}else if(choice.choice === 'Add an employee'){
    
}else if(choice.choice === 'Update an employee role'){
    
}else {

}