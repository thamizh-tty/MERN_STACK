import { useState } from "react";

function Projects() {
  const [show, setShow] = useState(false);

  const projectList = [
    {
      name: "Podcast Website",
      description: "React based podcast platform."
    },
    {
      name: "Smart Soil Monitor",
      description: "IoT project using ESP32."
    },
    {
      name: "Portfolio Website",
      description: "Personal website using React."
    }
  ];

  return (
    <section style={{ padding: "40px" }}>
      <h2>Projects</h2>

      {projectList.map((project, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{project.name}</h3>

          {show && <p>{project.description}</p>}

          <button onClick={() => setShow(!show)}>
            {show ? "Show Less" : "Show More"}
          </button>
        </div>
      ))}
    </section>
  );
}

export default Projects;