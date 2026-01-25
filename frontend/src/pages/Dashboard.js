import { useAssignments } from '../context/AssignmentContext';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

function Dashboard() {
  const { assignments } = useAssignments();

  const totalCriteria = assignments.reduce((total, assignment) => {
    return total + assignment.sections.reduce((sum, section) => 
      sum + section.criteria.length, 0
    );
  }, 0);

  return (
  <PageTransition>
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to FeedMark. Get started by creating an assignment or managing your feedback library.</p>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>{assignments.length}</h3>
          <p>Total Assignments</p>
        </div>
        <div className="stat-card">
          <h3>{totalCriteria}</h3>
          <p>Marking Criteria</p>
        </div>
        <div className="stat-card">
          <h3>0</h3>
          <p>Students Marked</p>
        </div>
      </div>

      {assignments.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem' }}>
            No assignments yet. Create your first one to get started!
          </p>
          <Link to="/create" className="btn-primary">Create Assignment</Link>
        </div>
      )}
    </div>
    </PageTransition>
  );
}

export default Dashboard;