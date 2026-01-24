import { createContext, useState, useContext } from 'react';

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedbackComments, setFeedbackComments] = useState([]);

  const addFeedback = (feedback) => {
    setFeedbackComments([...feedbackComments, feedback]);
  };

  const deleteFeedback = (id) => {
    setFeedbackComments(feedbackComments.filter(f => f.id !== id));
  };

  const updateFeedback = (id, updatedFeedback) => {
    setFeedbackComments(feedbackComments.map(f => 
      f.id === id ? { ...f, ...updatedFeedback } : f
    ));
  };

  return (
    <FeedbackContext.Provider value={{ 
      feedbackComments, 
      addFeedback, 
      deleteFeedback, 
      updateFeedback 
    }}>
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error('useFeedback must be used within FeedbackProvider');
  }
  return context;
}