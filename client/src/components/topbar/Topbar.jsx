import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
