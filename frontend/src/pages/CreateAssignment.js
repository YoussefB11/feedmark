import AssignmentForm from '../components/AssignmentForm';
import PageTransition from '../components/PageTransition';

function CreateAssignment() {
  return (
  <PageTransition>
    <div className="page">
      <h1>Create New Assignment</h1>
      <p>Build a marking scheme with sections and criteria.</p>
      <AssignmentForm />
    </div>
    </PageTransition>
  );
}

export default CreateAssignment;