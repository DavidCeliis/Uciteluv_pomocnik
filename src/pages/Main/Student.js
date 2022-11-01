import React, {useState, useEffect} from 'react'


function Student() {
  const [students, setStudents] = useState([]);
  const [studentslenght, setStudentslenght] = useState(1);
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  useEffect(()=>{
    if(localStorage.getItem("localStudents")){
        const stored = JSON.parse(localStorage.getItem("localStudents"));
        setStudents(stored);
    }
},[])
  const handleGetStudent=()=>{
    const rndStudents = shuffle(students)
    const studentLenght = students.length
    setStudents(rndStudents)
    setStudentslenght(studentLenght)
  }
  return (
    <div className='MainDiv'>
      <h1>Náhodný student</h1>
      {/* <h1>{!student
          ? "Dnešní šťastilvec bude.."
          : student
      }</h1> */}
      <button className= "btn btn-primary" onClick={()=>handleGetStudent()}>Vybrat!</button>
      {students.slice(studentslenght - 1).map((student) => (
        <React.Fragment key={student.id}>
            <div>
                <span style={{fontWeight: "bold"}}>{student.name}</span>
            </div>
        </React.Fragment>
      ))}
    </div>
    
  )
}

export default Student
