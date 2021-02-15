const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
   };


school.assignTeachersSubject = function (teacherId, subject) {
    const teacher = this.teachers.find(teacherEle => teacherEle.id == teacherId);
    teacher && teacher.subjects.push(subject);
}

school.assignTeachersSubject(1, 'CS');
console.log('assignTeachersSubject: ', school.teachers[0], '\n');

school.assignTeachersStudent = function (teacherId, studentId) {
    const teacher = this.teachers.find(teacherEle => teacherEle.id == teacherId);
    const student = this.students.find(studentEle => studentEle.id == studentId);
    teacher && student && teacher.students.push(studentId);
}

school.assignTeachersStudent(1, 13);
school.assignTeachersStudent(1, 11);
school.assignTeachersStudent(2, 12);
school.assignTeachersStudent(2, 13);

console.log('assignTeachersStudent: ', school.teachers, '\n');