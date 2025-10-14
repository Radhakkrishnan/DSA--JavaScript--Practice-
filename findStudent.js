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

findStudent(allStudents, "yogeh")