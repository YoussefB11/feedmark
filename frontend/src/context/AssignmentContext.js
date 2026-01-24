import { createContext, useState, useContext } from 'react';

const AssignmentContext = createContext();

export function AssignmentProvider({ children }) {
  const [assignments, setAssignments] = useState([]);

  const addAssignment = (assignment) => {
    setAssignments([...assignments, assignment]);
  };

  const deleteAssignment = (id) => {
    setAssignments(assignments.filter(a => a.id !== id));
  };

  const getAssignment = (id) => {
    return assignments.find(a => a.id === id);
  };

  return (
    <AssignmentContext.Provider value={{ 
      assignments, 
      addAssignment, 
      deleteAssignment,
      getAssignment 
    }}>
      {children}
    </AssignmentContext.Provider>
  );
}

export function useAssignments() {
  const context = useContext(AssignmentContext);
  if (!context) {
    throw new Error('useAssignments must be used within AssignmentProvider');
  }
  return context;
}