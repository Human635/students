//inputs
let studentName = document.querySelector("#stName")
let studentSurname = document.querySelector("#stSurname")
let studentNumber = document.querySelector("#stNumber")

let addStudentButton = document.querySelector(".add-st")
let studentListElement = document.querySelector(".students-list")

let studentsArray = []
let stId = 0

function validPhone() {
    let check = /^[\d\+]{3}\ \([\d]{2}\)\ [\d]{3}-[\d]{2}-[\d]{2}$/;
    let stPhone = document.getElementById('#stNumber').value;
    let valid = check.test(stPhone);
    if (valid) output = 'PHONE NUMBER - CORRECT!';
    else output = 'PHONE NUMBER - INVALID!';
    return valid;
}

addStudentButton.addEventListener("click", addStudent)

    function addStudent() {
    let studentNameValue = studentName.value
    let studentSurnameValue = studentSurname.value
    let studentNumberValue = studentNumber.value

    stId += 1

    let studentId = stId
        
    let studentObj = {
        studentId: stId,
        studentNameKey: studentNameValue,
        studentSurnameKey: studentSurnameValue,
        studentNumberKey: studentNumberValue
    }

    studentsArray.push(studentObj)

    console.log(studentsArray)
    rerenderStudentsTable()
}

function deleteStudent(studentId) {
    //Через фильтр
    studentsArray.filter(student => student.studentIdId !== studentIdroductId)
}

function rerenderStudentsTable(){
    let innerHtmlWithStudents = ''
}

    let innerHtmlWithStudents = ""
    
    studentsArray.forEach((item) => {
        innerHtmlWithStudents += `<div class='product'>
        <div class='description-wrapper'>
            <p>NAME: ${item.studentNameKey}</p>
            <p>SURNAME: ${item.studentSurnameKey}</p>
            <p>Phone Number: ${item.studentNumberKey}</p>
        </div>
        </div>`
    });    
    
    studentListElement.innerHTML = innerHtmlWithStudents
