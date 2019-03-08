# WEB322 - Assignment 3

Assignment 4 has been added!! You can check it out [here](https://github.com/Tibbs39/WEB322-assignment4)! Assignment 4 implements new features on top of this assignment.

This project adds on to the demonstration of Node.js found in [assignment 2](https://github.com/Tibbs39/WEB322-assignment2). 

The following is demonstrated with this project:
- Routing GET requests containing queries and returning requested data. 
- Using multer to upload and store files
- Using body-parser to parse data from a form, then add it to the database

The following queries are available:
```
/employees?status
```
This returns a list of employees filtered by status, either "Full Time" or "Part Time". For example `/employees?status=Full Time` returns a list of employees that have "Full Time" status

```
/employees?department
```
This returns a list of employees filtered by department. For example `/employees?department=1` returns a list of employees that are in department 1.


```
/employees?manager
```
This returns a list of employees filtered by their manager number. For example `/employees?manager=1` returns a list of employees who's manager's employee number is 1.


```
/employees/:num
```
This returns the result of searching for an employee by their employee number. For example `/employees/2` will return employee number 2.

*Please note that these queries cannot be chained together.*

*My intention with uploading school assignments on GitHub is merely to build a portfolio of my work.* **_Please do not plagiarize._**
