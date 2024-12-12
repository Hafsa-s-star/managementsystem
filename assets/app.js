 // Student Array
let students = [
    { id: 1, name: "Hafsa", age: 20, grade: "A" },
    { id: 2, name: "Komal", age: 22, grade: "B" },
    { id: 3, name: "Mubeen", age: 19, grade: "A" },
];

// Function to Display Students
function displayStudents() {
    const studentList = document.getElementById("students");
    studentList.innerHTML = ""; // Clear the list first

    students.forEach(student => {
        const li = document.createElement("li");
        li.textContent = `ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
        studentList.appendChild(li);
    });
}

// Add a New Student
document.getElementById("add-student-btn").addEventListener("click", () => {
    const name = document.getElementById("student-name").value;
    const age = parseInt(document.getElementById("student-age").value);
    const grade = document.getElementById("student-grade").value;

    if (name && age && grade) {
        const id = students.length ? students[students.length - 1].id + 1 : 1;
        students.push({ id, name, age, grade });
        displayStudents();
        alert(`${name} has been added!`);
    } else {
        alert("Please fill all fields!");
    }
});

// Remove a Student
document.getElementById("remove-student-btn").addEventListener("click", () => {
    const id = parseInt(document.getElementById("remove-student-id").value);

    if (!isNaN(id)) {
        students = students.filter(student => student.id !== id);
        displayStudents();
        alert(`Student with ID ${id} has been removed.`);
    } else {
        alert("Please enter a valid ID!");
    }
});

// Update a Student's Grade
document.getElementById("update-grade-btn").addEventListener("click", () => {
    const id = parseInt(document.getElementById("update-student-id").value);
    const newGrade = document.getElementById("update-student-grade").value;

    const student = students.find(student => student.id === id);
    if (student && newGrade) {
        student.grade = newGrade;
        displayStudents();
        alert(`Student ${student.name}'s grade has been updated to ${newGrade}.`);
    } else {
        alert("Please provide a valid ID and Grade!");
    }
});

// Initialize with Default Students
displayStudents();
