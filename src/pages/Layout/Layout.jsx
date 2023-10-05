import { Outlet } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "../../Redux/user/userSlice";
import { useEffect } from "react";

const Layout = () => {
  const dispatch = useDispatch();
  // const { isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setLoading(true));
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    </div>
  );
};

export default Layout;
