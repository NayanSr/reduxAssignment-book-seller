import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/user/userSlice";

const Signin = () => {
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const data = { email: email, password: password };
    // console.log(name, email, password);
    dispatch(loginUser({ email, password }));
    console.log(data);
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <input
            style={{ width: "80px", height: "25px", marginTop: "10px" }}
            className="btn-submit"
            type="submit"
            value="Signin"
          />
        </div>
      </form>
    </div>
  );
};

export default Signin;
