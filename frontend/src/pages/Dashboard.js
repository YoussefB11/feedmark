function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to FeedMark. Get started by creating an assignment or managing your feedback library.</p>
      
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>0</h3>
          <p>Total Assignments</p>
        </div>
        <div className="stat-card">
          <h3>0</h3>
          <p>Feedback Comments</p>
        </div>
        <div className="stat-card">
          <h3>0</h3>
          <p>Students Marked</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;