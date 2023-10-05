import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import Signup from "../pages/SigninUp/Signup";
import Signin from "../pages/SigninUp/Signin";
import NotFound from "../pages/Common/NotFound";
import AddNewBook from "../pages/AddNewBook/AddNewBook";
import Details from "../pages/Details/details";
import PrivateRoute from "./PrivateRoute";
import UpdateBook from "../pages/UpdateBook/UpdateBook";
// import Testlayout from "../pages/Layout/Testlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/allBooks",
        element: <AllBooks />,
        // loader: () => fetch("/books.json"),
      },
      { path: "/signup", element: <Signup /> },
      { path: "/signin", element: <Signin /> },
      { path: "/updateBook/:id", element: <UpdateBook /> },
      {
        path: "/addNew",
        element: (
          <PrivateRoute>
            <AddNewBook />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/allBooks/:id",
        element: <Details />,
        // loader: () => fetch("/books.json"),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  /*
  // for a different layout
  {
    path: "/test",
    element: <Testlayout />,
    children: [
      { path: "/test", element: <Home /> },
      { path: "/test/ab", element: <AllBooks /> },
    ],
  }, */
]);

export default router;
