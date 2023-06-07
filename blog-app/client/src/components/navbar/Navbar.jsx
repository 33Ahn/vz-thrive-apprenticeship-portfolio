import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">
              <span className="title">J.A.B</span>
              {/* <div className="cover-title"></div> */}
            </Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <Link to="/create-post">
              <span className="create-blog"> Create Blog</span>
              {/* <div className="cover"></div> */}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
