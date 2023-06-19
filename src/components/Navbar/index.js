import {Link} from 'react-router-dom'
import './index.css'

const Navbar = () => (
  <div className="navbar-container">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
        alt="web-icon"
        className="web-pic"
      />
    </div>
    <div className="link-container">
      <ul className="list">
        <Link to="/">
          <li className="items">Home</li>
        </Link>
        <Link to="/about">
          <li className="items">About</li>
        </Link>
      </ul>
    </div>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
        alt="light"
        className="light-pic"
      />
    </div>
  </div>
)
export default Navbar
