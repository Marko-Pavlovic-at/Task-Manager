import { useState } from "react";

function App(){
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  function addProject(){
    setProjects([...projects, {id:Date.now(), name: projectName}]);
    
  }
  return(
    
    <>
    <h1>Task Manager</h1>
    <label htmlFor="projectName">Project Name:</label>
    <input id="projectName" name="projectName" type="text" value={projectName} 
    onChange={e => setProjectName(e.target.value)} />
    <button 
    className="button greenBtn "
    onClick={addProject}
    >Add Project</button>
    {projects.map(project => <div className="projectCard" key={project.id}>{project.name}</div>)}
    </>
  )
}

export default App;