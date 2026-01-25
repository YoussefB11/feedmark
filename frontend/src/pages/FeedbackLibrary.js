import { useState } from 'react';
import { useFeedback } from '../context/FeedbackContext';
import FeedbackForm from '../components/FeedbackForm';
import './FeedbackLibrary.css';
import PageTransition from '../components/PageTransition';

function FeedbackLibrary() {
  const { feedbackComments, deleteFeedback } = useFeedback();
  const [editingFeedback, setEditingFeedback] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const handleDelete = (id, text) => {
    if (window.confirm(`Delete this feedback: "${text.substring(0, 50)}..."?`)) {
      deleteFeedback(id);
    }
  };

  const handleEdit = (feedback) => {
    setEditingFeedback(feedback);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredComments = filterCategory === 'all' 
    ? feedbackComments 
    : feedbackComments.filter(f => f.category === filterCategory);

  const getCategoryBadgeClass = (category) => {
    const classes = {
      positive: 'badge-positive',
      improvement: 'badge-improvement',
      critical: 'badge-critical',
      excellent: 'badge-excellent',
      general: 'badge-general'
    };
    return classes[category] || 'badge-general';
  };

  return (
  <PageTransition>
    <div className="page">
      <h1>Feedback Library</h1>
      <p>Create and manage reusable feedback comments for marking.</p>

      <FeedbackForm 
        editingFeedback={editingFeedback}
        onCancel={() => setEditingFeedback(null)}
      />

      <div className="feedback-controls">
        <h2>Your Feedback Comments ({filteredComments.length})</h2>
        <div className="filter-controls">
          <label>Filter by category:</label>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="general">General</option>
            <option value="positive">Positive</option>
            <option value="improvement">Needs Improvement</option>
            <option value="critical">Critical Issue</option>
            <option value="excellent">Excellent Work</option>
          </select>
        </div>
      </div>

      {filteredComments.length === 0 ? (
        <div className="empty-state">
          <p>No feedback comments yet. Create your first one above!</p>
        </div>
      ) : (
        <div className="feedback-list">
          {filteredComments.map((feedback) => (
            <div key={feedback.id} className="feedback-item">
              <div className="feedback-header">
                <span className={`category-badge ${getCategoryBadgeClass(feedback.category)}`}>
                  {feedback.category}
                </span>
                <div className="feedback-actions">
                  <button onClick={() => handleEdit(feedback)} className="btn-edit-small">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(feedback.id, feedback.text)} className="btn-delete-small">
                    Delete
                  </button>
                </div>
              </div>
              
              <p className="feedback-text">{feedback.text}</p>
              
              {feedback.tags && feedback.tags.length > 0 && (
                <div className="feedback-tags">
                  {feedback.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              )}
              
              <div className="feedback-footer">
                <span className="feedback-date">
                  {feedback.updatedAt !== feedback.createdAt ? 'Updated' : 'Created'}: {' '}
                  {new Date(feedback.updatedAt || feedback.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </PageTransition>
  );
}

export default FeedbackLibrary;