//inputs
let studentName = document.querySelector("#stName")
let studentSurname = document.querySelector("#stSurname")

let addStudentButton = document.querySelector(".add-st")
let studentListElement = document.querySelector(".students-list")

let studentsArray = []
let stId = 0

addStudentButton.addEventListener("click", addStudent)

function addStudent() {
    let studentNameValue = studentName.value
    let studentSurnameValue = studentSurname.value

    stId += 1

    let studentId = stId
        
    let studentObj = {
        studentId: studentId,
        studentNameKey: studentNameValue,
        studentSurnameKey: studentSurnameValue,
    }

    studentsArray.push(studentObj)
    rerenderStudentsTable()
}

function deleteStudent(studentId) {
    //Через splice
    let studentIdx = studentsArray.findIndex(student => student.studentId === studentId)
    studentsArray.splice(studentIdx, 1)
    rerenderStudentsTable()
}

function rerenderStudentsTable(){
    let innerHtmlWithStudents = ''

studentsArray.forEach((item, index) => {
    innerHtmlWithStudents += `<div class='product'>
        <div class='description-wrapper'>
            <p>NUMBER: ${index + 1}</p>
            <p>NAME: ${item.studentNameKey}</p>
            <p>SURNAME: ${item.studentSurnameKey}</p>
            <button class="remove-button" onclick="deleteStudent(${item.studentId})">Delete</button>
        </div>
    </div>`
});
    
    studentListElement.innerHTML = innerHtmlWithStudents
}