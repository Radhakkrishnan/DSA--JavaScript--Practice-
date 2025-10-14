// Problem: Find a student's name in the array
// Initial Approach: Used map() for iteration (misused purpose)
// Optimized Approach: Used for...of loop for better control and efficiency
let allStudents = ["rk", "abi", "krish", "subha", "yogesh"]
function findStudent(allStudents, studentName){
    allStudents.map((student) => {
        if(student === studentName){
            console.log(student)
        }
        else{
            console.log("name not found")
        }
    })
}
findStudent(allStudents, "yogeh") // Here, the output will be "name not found" - 5 times; which is not the behaviour we want, but I thought map is one way to iterate thorugh an array(It is not, rather it is a way to create a new array by altering an old one). So, eventhough this code performs, It still lack completeness and it is misusing the purpose of map. 

let studentDatabase = ["rk", "abi", "krish", "subha", "yogesh"]
const findStudents = (everyStudents, studentname) => {
    for(let student of everyStudents){
        if(student === studentname){
            console.log(student)
            return
        }
    }
    console.log("student not found")
}
findStudents(studentDatabase,"krsh")//This method iterates through every student in the array and it will not create a new array rather it just iterates and loops. 