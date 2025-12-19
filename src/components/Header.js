import { Link } from "react-router-dom"
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Information">Information</Link></li>
          <li><Link to="/Activities">Activities</Link></li>
          <li><Link to="/Events">Events</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;