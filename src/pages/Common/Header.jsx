import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/navLogo2.jpg";
import { useSelector } from "react-redux";

const Header = () => {
  // const user = { email: "nayan@gmail.com" };
  // const user = null;
  const { user } = useSelector((state) => state.user);
  return (
    <div className="header-container">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav className="headers">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allBooks">All Books</Link>
          </li>
        </ul>
      </nav>
      <div className="authentications">
        {!user?.email ? (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/signin">Signin</Link>
          </>
        ) : (
          <>
            <Link to="/addNew">Add New Book</Link>
            <Link to="/">Signout</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
