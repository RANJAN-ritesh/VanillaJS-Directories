const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};

const newDepartment = {
  art: { teachers: 2, students: 50 },
};

function countCalculation(school) {
  const {
    departments: {
      math: { teachers: mathTeachersCount, students: mathStudentsCount },
      history: { teachers: historyTeachersCount, students: historyStudentsCount }
    }
  } = school;

  return {
    mathTeachersCount,
    historyTeachersCount,
    mathStudentsCount,
    historyStudentsCount
  };
}

function findTopStudent(school, course) {
  const topStudent = school.students.reduce((top, current) => {
    if (current.scores[course] > top.scores[course]) {
      return current;
    } else {
      return top;
    }
  });

  return topStudent;
}

function addNewDept(school, newDept) {
  const updatedDepartments = { ...school.departments, ...newDept };
  return { ...school, departments: updatedDepartments };
}

function highestStudentCountDepartment(school) {
  let maxStudentCount = 0;
  let departmentWithMaxStudentCount = "";

  for (const department in school.departments) {
    if (school.departments[department].students > maxStudentCount) {
      maxStudentCount = school.departments[department].students;
      departmentWithMaxStudentCount = department;
    }
  }

  return departmentWithMaxStudentCount;
}

function generateGreeting(name, language = "English") {
  switch (language.toLowerCase()) {
    case "spanish":
      return `¡Hola, ${name}!`;
    case "french":
      return `Bonjour, ${name}!`;
    default:
      return `Hello, ${name}!`;
  }
}

console.log(countCalculation(school));
console.log(findTopStudent(school, "math"));
console.log(addNewDept(school, newDepartment));
console.log(highestStudentCountDepartment(school));
console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));

//Dont remove below export statement part

export {
  countCalculation,
  findTopStudent,
  addNewDept,
  highestStudentCountDepartment,
  generateGreeting,
};
