import React, { useState, useEffect } from "react";

export default function Students() {
  const [student, setStudent] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(()=>{
      if(localStorage.getItem("localStudents")){
          const stored = JSON.parse(localStorage.getItem("localStudents"));
          setStudents(stored);
      }
  },[])

  const handleAddStudent = (e) => {
    if (student) {
      const newStudent = { id: new Date().getTime().toString(), name: student };
      setStudents([...students, newStudent]);
      localStorage.setItem("localStudents", JSON.stringify([...students, newStudent]));
      setStudent("");
    }
  };

  const handleDeleteAll=()=>{
    setStudents([]);
    localStorage.removeItem("localStudents");
  }
  const handleDeleteById = (student)=>{
      const deleted = students.filter((t)=>t.id !== student.id);
      setStudents(deleted);
      localStorage.setItem("localStudents", JSON.stringify(deleted))
  }

 
  return (
    <div className="container row" style={{ width: "800px", margin: "auto"}}>
      <div className="col-8">
        <input
          name="student"
          type="text"
          value={student}
          placeholder="Jméno studenta..."
          className="form-control"
          onChange={(e) => setStudent(e.target.value)}/>
      </div>
      <div className="col-4">
        <button 
        style={{margin: "auto"}}
          className="btn btn-primary"
          onClick={handleAddStudent}>Přidat</button>
      </div>
      <div>Počet studentů: {students.length}</div>
      {students.map((student) => (
        <React.Fragment key={student.id}>
            <div className="col-11">
                <span style={{textAlign: "left", fontWeight: "bold"}}>{student.name}</span>
            </div>

            <div className="col-1">
                <button
                className ="btn btn-danger"
                onClick ={()=> handleDeleteById(student)}>Smazat</button>
            </div>
        </React.Fragment>
      ))}
      {!students.length ? null:(
          <div>
              <button className= "btn btn-danger" onClick={()=>handleDeleteAll()}>Smazat vše</button>
          </div>
      )}
    </div>
  );
}