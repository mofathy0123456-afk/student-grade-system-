class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }
  getAverage() {
    const sum = this.grades.reduce(function (acc, grade) {
      return acc + grade;
    }, 0);
    return sum / this.grades.length;
  }
  getGrade() {
    const avg = this.getAverage();
    if (avg >= 90) {
      return "A";
    } else if (avg >= 80) {
      return "B";
    } else if (avg >= 70) {
      return "C";
    } else if (avg >= 60) {
      return "D";
    } else if (avg >= 50) {
      return "E";
    } else {
      return "F";
    }
  }
  getResult() {
    if (this.getAverage() >= 50 && this.attendance >= 75) {
      return "Pass";
    } else {
      return "Need Review";
    }
  }
}

const studentsList = [
  new Student(1, "Ahmed Mohamed", [85, 90, 88], 95),
  new Student(2, "Sara Ali", [45, 42, 48], 80),
  new Student(3, "Omar Khaled", [70, 65, 72], 88),
  new Student(4, "Noor Hassan", [48, 44, 40], 70)
];

console.log("Report");
studentsList.forEach(function (student) {
  console.log(student.name, student.getAverage(), student.getGrade(), student.getResult());
});

const strugglingStudents = studentsList.filter(function (student) {
  const avg = student.getAverage();
  return avg >= 40 && avg < 50;
});

const afterMercy = strugglingStudents.map(function (student) {
  return {
    name: student.name,
    oldAverage: student.getAverage(),
    newAverage: student.getAverage() + 5
  };
});

const sumAfterMercy = afterMercy.reduce(function (acc, student) {
  return acc + student.newAverage;
}, 0);

const mercyAverage = afterMercy.length > 0 ? sumAfterMercy / afterMercy.length : 0;

console.log("Struggling After Mercy");
console.log(afterMercy);
console.log("Mercy Average");
console.log(mercyAverage);
;