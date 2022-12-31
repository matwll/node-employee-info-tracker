const inquirer = require("inquirer");
const fs = require("fs");
const cTable = require("console.table");
const connection = require('./config/connection');
const mysql = require('mysql2');

console.log(connection.query('show department'));

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
      "Quit application",
    ],
  },
]).then(answer => {
    if(answer.choice === 'View all departments'){
      connection.query('show department');
  }else if(answer.choice === 'View all roles'){
      connection.query('show role');
  }else if(answer.choice === 'View all employees'){
      connection. query('show employee');
  }else if(answer.choice === 'Add a department'){
      inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter the name of the department'
        },
      ]).then(answers => {

      })
  }else if(answer.choice === 'Add a role'){
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the role'
      },
      {
        type: 'number',
        name: 'salary',
        message: 'Enter the salary of the role'
      },
      {
        type: 'input',
        name: 'department',
        message: 'Enter the department of the role'
      },
    ]).then(answers => {

    })
  }else if(answer.choice === 'Add an employee'){
    inquirer.prompt([
      {
        type: 'input',
        name: 'fname',
        message: 'Enter the employees First name.'
      },
      {
        type: 'input',
        name: 'lname',
        message: 'Enter the employees Last name.'
      },
      {
        type: 'input',
        name: 'role',
        message: 'Enter the employees role.'
      },
      {
        type: 'input',
        name: 'manager',
        message: 'Enter the Manager this employee reports to.'
      },
    ]).then(answers => {
      
    })
  }else if(answer.choice === 'Update an employee role'){
    inquirer.prompt([
      {
        type: 'input',
        name: 'employee',
        message: 'Which employee do you want to update?'
      },
      {
        type: 'input',
        name: 'newrole',
        message: 'Enter the new role for this employee.'
      },
    ]).then(answers => {
      
    })
  }else {
  
  }
});

