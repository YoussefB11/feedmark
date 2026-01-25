import { useAssignments } from '../context/AssignmentContext';
import { Link } from 'react-router-dom';
import './Assignments.css';
import PageTransition from '../components/PageTransition';

function Assignments() {
  const { assignments, deleteAssignment } = useAssignments();

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteAssignment(id);
    }
  };

  const calculateTotalCriteria = (sections) => {
    return sections.reduce((total, section) => total + section.criteria.length, 0);
  };

  return (
  <PageTransition>
    <div className="page">
      <div className="page-header">
        <h1>Assignments</h1>
        <Link to="/create" className="btn-create">
          + Create New Assignment
        </Link>
      </div>

      {assignments.length === 0 ? (
        <div className="empty-state">
          <p>No assignments yet.</p>
          <Link to="/create" className="btn-primary">Create Your First Assignment</Link>
        </div>
      ) : (
        <div className="assignments-grid">
          {assignments.map((assignment) => (
            <div key={assignment.id} className="assignment-card">
              <Link to={`/assignments/${assignment.id}`} className="card-link">
                <div className="card-header">
                  <h3>{assignment.name}</h3>
                  <span className="total-marks">{assignment.totalMarks} marks</span>
                </div>
                
                {assignment.description && (
                  <p className="card-description">{assignment.description}</p>
                )}
                
                <div className="card-stats">
                  <div className="stat">
                    <span className="stat-label">Sections:</span>
                    <span className="stat-value">{assignment.sections.length}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Criteria:</span>
                    <span className="stat-value">{calculateTotalCriteria(assignment.sections)}</span>
                  </div>
                </div>
              </Link>

              <div className="card-footer">
                <span className="created-date">
                  Created: {new Date(assignment.createdAt).toLocaleDateString()}
                </span>
                <div className="card-actions">
                  <Link to={`/assignments/${assignment.id}`} className="btn-view">
                    View
                  </Link>
                  <button 
                    className="btn-delete"
                    onClick={() => handleDelete(assignment.id, assignment.name)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </PageTransition>
  );
}

export default Assignments;