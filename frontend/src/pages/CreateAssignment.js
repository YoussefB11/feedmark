import AssignmentForm from '../components/AssignmentForm';

function CreateAssignment() {
  return (
    <div className="page">
      <h1>Create New Assignment</h1>
      <p>Build a marking scheme with sections and criteria.</p>
      <AssignmentForm />
    </div>
  );
}

export default CreateAssignment;