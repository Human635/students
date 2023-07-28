//inputs
let studentName = document.querySelector("#stName")
let studentSurname = document.querySelector("#stSurname")
let studentNumber = document.querySelector("#stNumber")

let addStudentButton = document.querySelector(".add-st")
let studentListElement = document.querySelector(".students-list")

let studentsArray = []

addStudentButton.addEventListener("click", function(event){
    let studentNameValue = studentName.value
    let studentSurnameValue = studentSurname.value
    let studentNumberValue = studentNumber.value
        
    let studentObj = {
        studentNameKey: studentNameValue,
        studentSurnameKey: studentSurnameValue,
        studentNumberKey: studentNumberValue
    }

    studentsArray.push(studentObj)

    console.log(studentsArray)
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
})