import { useState } from "react";

function App(){
  const [projects, setProjects] = useState([]);
  function addProject(){
    setProjects([...projects, {id:Date.now(), name:"test"}]);
    
  }
  return(
    
    <>
    <h1>Task Manager</h1>
    <button 
    className="button greenBtn "
    onClick={addProject}
    >Add Project</button>
    {projects.map(project => <div className="projectCard" key={project.id}>{project.name}</div>)}
    </>
  )
}

export default App;