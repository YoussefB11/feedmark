import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AssignmentProvider } from './context/AssignmentContext';
import { FeedbackProvider } from './context/FeedbackContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Assignments from './pages/Assignments';
import AssignmentDetails from './pages/AssignmentDetails';
import CreateAssignment from './pages/CreateAssignment';
import FeedbackLibrary from './pages/FeedbackLibrary';
import './App.css';

function App() {
  return (
    <FeedbackProvider>
      <AssignmentProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main className="App-main">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/assignments" element={<Assignments />} />
                <Route path="/assignments/:id" element={<AssignmentDetails />} />
                <Route path="/create" element={<CreateAssignment />} />
                <Route path="/feedback" element={<FeedbackLibrary />} />
              </Routes>
            </main>
          </div>
        </Router>
      </AssignmentProvider>
    </FeedbackProvider>
  );
}

export default App;