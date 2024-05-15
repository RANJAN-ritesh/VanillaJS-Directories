// **Problem 1: Combining Arrays** [2]**********************************

// You have two arrays **`fruits`** and **`vegetables`**. Your task is to create a new array **`groceries`** by combining both arrays using the spread operator.

function combiningArrays(fruits, vegetables) {
  // Create the 'groceries' array by combining 'fruits' and 'vegetables'
  return [...fruits, ...vegetables]
}

const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];

console.log(combiningArrays(fruits, vegetables)); // [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]

// **Problem 2: Cloning Objects** [1+1]***************************************

// You have an object **`person`** with properties **`name`**, **`age`**, and **`address`**. Your task is to create a new object **`personCopy`** by cloning the **`person`** object using the spread operator.

function cloningObjects(person) {
  // Create the 'personCopy' object by cloning the 'person' object
  const personCopy = {...person}
  return personCopy
}

const person = { name: "John", age: 30, address: "123 Main St" };

console.log(cloningObjects(person)); // { name: "John", age: 30, address: "123 Main St" }

// **Problem 3: Merging Objects** [1+1]*********************************************

// You have two objects **`student`** and **`course`**. Your task is to create a new object **`studentWithCourse`** by merging the properties of both objects using the spread operator.

function mergingObjects(student,course) {
  return {...student, ...course}
  // Create the 'studentWithCourse' object by merging 'student' and 'course'
}
const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };

console.log(mergingObjects(student, course)); // { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }

// **Problem 4: Combining Nested Arrays** [1]****************************************

// You have two arrays **`array1`** and **`array2`**, each containing nested arrays. Your task is to create a new array **`combinedArray`** by combining the nested arrays from both arrays using the spread operator.

function combiningNestedArrays(array1, array2) {
  // Create the 'combinedArray' by combining the nested arrays from 'array1' and 'array2'
  return [...array1,...array2]
}
const array1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const array2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];

console.log(combiningNestedArrays(array1, array2)); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]

// ### employee data  [5]

// You are given an array of employee objects, each containing information about an employee. Your task is to utilize destructuring to extract and manipulate the data based on specific requirements.

// **Employee Data:**

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

// **Problem 5: Employee Information** [1]******************

function employeeInformation(employees) {
  // Extract the **`name`** and **`department`** of the second employee in the array and assign them to variables `secondEmployeeName` and `secondEmployeeDepartment`.
  return {secondeEmployeeName: employees[1].name, secondEmployeeDepartment: employees[1].department}
}

console.log(employeeInformation(employees)); // { secondEmployeeName: 'Jane Smith',secondEmployeeDepartment: 'Finance' }

//**Problem 6: averageSalary** [1]*****************
function averageSalary(employees) {
  let totalSalary = 0;
  let count = 0;
  
  // Loop through each employee
  for (const { salary } of employees) {
    totalSalary += salary;
    count++;
  }
  
  // Calculate the average
  const average = totalSalary / count;
  
  return average;
}

console.log(averageSalary(employees)); // 60000

// **Problem 7: thirdEmployeeInfo** [1]*****************

function thirdEmployeeInfo() {
  // Extract the `name`, **`age`,** and **`salary`** of the third employee and assign them to variables `thirdEmployeeName`,`thirdEmployeeAge,` and `thirdEmployeeSalary` and calculate a bonus of 10% on the salary.
  // Print a message `Employee: <thirdEmployeeName>, Age: <thirdEmployeeAge>, Salary: <thirdEmployeeSalary>, bonus:<calculatedBonus>`.
  const { name, age, salary } = employees[2]; // Accessing the third employee (index 2)
  const bonus = salary * 0.1; // Calculating the bonus (10% of salary)
  
  // Printing the information
  return (`Employee: ${name}, Age: ${age}, Salary: ${salary}, bonus: ${bonus}`);
}
console.log(thirdEmployeeInfo(employees)); //Employee: Alex Johnson, Age: 35, Salary: 70000, bonus: 7000

// **Problem 8: destructuringToSwap** [1]******************
function destructuringToSwap() {
  // Use destructuring to swap the values of the first and last employees in the array.
  [employees[0], employees[employees.length - 1]] = [employees[employees.length - 1], employees[0]];
  
  return employees;
}

console.log(destructuringToSwap(employees));
//[
//   { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
//   { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
//   { name: 'John Doe', age: 30, department: 'HR', salary: 50000 }
// ]

// **Problem 9: highestPaid** [1]*************************
function highestPaid() {
  // **Note: use for-of-loop only.**
  let highestSalaryEmployee = null;
  let highestSalary = 0;
  
  // Loop through each employee
  for (const employee of employees) {
    if (employee.salary > highestSalary) {
      highestSalary = employee.salary;
      highestSalaryEmployee = employee;
    }
  }
  
  return highestSalaryEmployee;
}

console.log(highestPaid(employees)); // { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

//Dont remove below export statement part
export {
  combiningArrays,
  cloningObjects,
  mergingObjects,
  combiningNestedArrays,
  employeeInformation,
  averageSalary,
  thirdEmployeeInfo,
  destructuringToSwap,
  highestPaid,
};
