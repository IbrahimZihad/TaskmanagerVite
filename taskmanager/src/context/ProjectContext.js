import React, { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const useProject = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const selectProject = (project) => {
    setSelectedProject(project);
  };

  const clearProject = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectContext.Provider
      value={{
        selectedProject,
        selectProject,
        clearProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
