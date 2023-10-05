import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/navLogo2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/user/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const Header = () => {
  // const user = { email: "nayan@gmail.com" };
  // const user = null;
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignout = () => {
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

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
        {user?.email ? (
          <>
            <Link to="/addNew">Add New Book</Link>
            <Link onClick={handleSignout} to="/">
              Signout
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/signin">Signin</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
