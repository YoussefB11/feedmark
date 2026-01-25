import { Link } from 'react-router-dom';
import logo from '../assets/Logo_Feedmark.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
        <img src={logo} alt="FeedMark" className="navbar-logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/assignments">Assignments</Link></li>
        <li><Link to="/create">Create Assignment</Link></li>
        <li><Link to="/feedback">Feedback Library</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;