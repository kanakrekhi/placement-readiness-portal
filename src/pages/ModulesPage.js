import React from "react";
import { useParams } from "react-router-dom";
import { modules } from "../data/modulesData";

const ModulesPage = () => {
  const { role } = useParams();

  const roleModules = modules[role];

  if (!roleModules) {
    return <h2>No modules found for: {role}</h2>;
  }

  return (
    <div>
      <h1>{role} Modules</h1>

      {roleModules.map((m) => (
        <div key={m.id} className="module-card">
          <h2>{m.title}</h2>
          <p>{m.description}</p>
         <a href={m.resource} target="_blank" rel="noopener noreferrer">
  Open Resource
</a>

        </div>
      ))}
    </div>
  );
};

export default ModulesPage;
