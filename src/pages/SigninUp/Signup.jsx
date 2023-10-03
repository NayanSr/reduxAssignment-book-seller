import { useDispatch } from "react-redux";
import { createUser } from "../../Redux/user/userSlice";
import "./Signup.css";

const Signup = () => {
  const dispatch = useDispatch();

  const handleSignin = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const data = { email: email, password: password };
    // console.log(name, email, password);
    dispatch(createUser({ email, password }));
    console.log(data);
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSignin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
          />
        </div>

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
            type="text"
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
            value="Signup"
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;

// const Signup = () => {
//   const handleSignin = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const password = form.password.value;
//     const confirm = form.confirm.value;
//     console.log(name, email, password, confirm);
//   };

//   return (
//     <div className="hero min-h-screen bg-base-200">
//       <form onSubmit={handleSignin}>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input
//             type="text"
//             name="name"
//             placeholder="name"
//             className="input input-bordered"
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input
//             type="text"
//             name="email"
//             placeholder="email"
//             className="input input-bordered"
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input
//             type="text"
//             name="password"
//             placeholder="password"
//             className="input input-bordered"
//           />
//         </div>

//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input
//             type="text"
//             name="confirm"
//             placeholder="confirm password"
//             className="input input-bordered"
//           />
//         </div>

//         <div className="form-control mt-6">
//           <input className="btn btn-primary" type="submit" value="Signup" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;
