// 1. Create Student Class
class Student {
    constructor(name, id, grades) {
        this.name = name;
        this.id = id;
        this.grades = grades;
    }

    // 2. Add Grade Method
    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.grades.push(grade);
            console.log("Grade added successfully");
        } else {
            console.log("Invalid grade!");
        }
    }

    // 3. Analyze Grades Method
    analyzeGrades() {  
    if (this.grades.length === 0) {
        return {
            average: 0,
            highest: 0,
            lowest: 0,
            passedGrades: []
        };
    }

    const total = this.grades.reduce(
            (sum, grade) => sum + grade, 0
        );

        const average = total / this.grades.length;

        const highest = Math.max(...this.grades);
        const lowest = Math.min(...this.grades);

        const passedGrades = this.grades.filter(
            grade => grade >= 50
        );

        return {
            average,
            highest,
            lowest,
            passedGrades
        };
    }
}

// 4. Create Student Objects
const students = [
    new Student("Ahmed", 101, [80, 90, 70]),
    new Student("Mohamed", 102, [60, 75, 85]),
    new Student("Ali", 103, [40, 55, 65]),
    new Student("Sara", 104, [85, 90, 95])
];
// Add a new grade
students[0].addGrade(95);
students[3].addGrade(88);
// 5. Check Objects using forEach
console.log("All Students:");

students.forEach(student => {
    if (student instanceof Student) {
        console.log("Name:", student.name);
        console.log("ID:", student.id);
        console.log("Grades:", student.grades);

        const result = student.analyzeGrades();

        console.log("Average:", result.average);
        console.log("Highest Grade:", result.highest);
        console.log("Lowest Grade:", result.lowest);
        console.log("Passed Grades:", result.passedGrades);

        console.log("--------------------");
    }
});

// 6. Advanced Filtering

// Students with average greater than or equal to 70
const excellentStudents = students.filter(student => {
    return student.analyzeGrades().average >= 70;
});

console.log("Excellent Students:");

excellentStudents.forEach(student => {
    console.log(student.name);
});

// Students who have a grade below 50
const studentsWithLowGrades = students.filter(student => {
    return student.grades.some(grade => grade < 50);
});

console.log("Students with Low Grades:");

studentsWithLowGrades.forEach(student => {
    console.log(student.name);
});

// 7. Map Function
const studentNames = students.map(student => student.name);

console.log("Student Names:", studentNames);

// 8. Console Logging
console.log("Total Students:", students.length);
console.log("All Students Data:", students);

// Grace Committee
const strugglingStudents = students.filter(student => {
    const average = student.analyzeGrades().average;
    return average >= 40 && average <= 49;
});

const graceStudents = strugglingStudents.map(student => {
    return {
        name: student.name,
        oldAverage: student.analyzeGrades().average,
        newAverage: student.analyzeGrades().average +5
    };
});

const totalGraceAverage = graceStudents.reduce(
    (sum, student) => sum + student.newAverage,
    0
);

const graceAverage = graceStudents.length > 0
    ? totalGraceAverage / graceStudents.length
    : 0;

console.log("Grace Students:", graceStudents);
console.log("Grace Average:", graceAverage);

    const studentsDiv = document.getElementById("students");

studentsDiv.innerHTML = students.map(student => {
    const result = student.analyzeGrades();

    return `
        <div>
            <h2>${student.name}</h2>
            <p>Student ID: ${student.id}</p>
            <p>Grades: ${student.grades.join(", ")}</p>
            <p>Average: ${result.average}</p>
            <p>Highest Grade: ${result.highest}</p>
            <p>Lowest Grade: ${result.lowest}</p>
        </div>
        <hr>
    `;
}).join("");
    
                        
                        
                         