import { useState } from "react";

function App(){
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");

  function addProject(){
    setProjects([...projects, {id: Date.now(), name: projectName}]);
    setProjectName("");
  }
  return(
    <main>
      <h1>Task Manager</h1>
      <label htmlFor="ProjectNameInput">Project Name:</label>
      <input 
      name="ProjectNameInput"
      id="ProjectNameInput"
      value={projectName}
      onChange={e => setProjectName(e.target.value)}
      type="text" />
      <button className="button greenBtn"
      onClick={addProject}
      >
        
        Add Project</button>
      <div className="projectCards">
        {projects.map(project =>(
          <p className="projectCard" key={project.id}>{project.name}</p>
        ))}
      </div>
    </main>
  )
}
export default App;