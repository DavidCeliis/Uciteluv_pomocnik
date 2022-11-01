import React, {useState, useEffect} from 'react'

function List() {
  const [students, setStudents] = useState([]);
  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  useEffect(()=>{
    if(localStorage.getItem("localStudents")){
        const stored = JSON.parse(localStorage.getItem("localStudents"));
        setStudents(stored);
    }
},[])
 const handleMix = () => {
  const rndStudents = shuffle(students)
  setStudents(rndStudents)
 };
  return (
    <div className='MainDiv'>

      <h1>Seznam</h1>
      {students.map((student) => (
        <React.Fragment key={student.id}>
            <div>
                <span>{student.name}</span>
            </div>
        </React.Fragment>
      ))}
       <div style={{fontWeight: "bold"}}>Počet studentů: {students.length}</div>
      <button className='btn btn-success' onClick={handleMix}>Zamixovat</button>
    </div>
  )
}

export default List
