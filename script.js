//inputs
let studentName = document.querySelector("#stName")
let studentSurname = document.querySelector("#stSurname")

let addStudentButton = document.querySelector(".add-st")
let studentListElement = document.querySelector(".students-list")

let studentsArray = []

addStudentButton.addEventListener("click", function(event){
    let studentNameValue = studentName.value
    let studentSurnameValue = studentSurname.value
        
    let studentObj = {
        studentNameKey: studentNameValue,
        studentSurnameKey: studentSurnameValue
    }

    studentsArray.push(studentObj)

    console.log(studentsArray)
    let innerHtmlWithStudents = ""
    
    studentsArray.forEach((item) => {
        innerHtmlWithStudents += `<div class='product'>
        <div class='description-wrapper'>
            <p>NAME: ${item.studentNameKey}</p>
            <p>SURNAME: ${item.studentSurnameKey}</p>
        </div>
    </div>`
     });    
    
    studentListElement.innerHTML = innerHtmlWithStudents
})