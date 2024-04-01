import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase.config/firebase.config";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { LuEyeOff } from "react-icons/lu";
import { Link } from "react-router-dom";

const Sign_In = () => {
  const [signInError, setSignInError] = useState("");
  const [signInSuccess, setSignInSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handelSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const accept = e.target.Terms.checked;
    setSignInError("");
    setSignInSuccess("");

    // validation password
    if (password.length < 6) {
      setSignInError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setSignInError("Should be use at least one Upper Case");
      return;
    } else if (!accept) {
      setSignInError("Accept Terms and condition");
      return;
    }

    // validation email
    createUserWithEmailAndPassword(auth, email, password, name, accept)
      .then((result) => {
        setSignInSuccess("Successfully Sign Up");

        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("Updated");
          })
          .catch((error) => {
            console.log(error.message);
          });
        sendEmailVerification(result.user)
          .then(() => {
            setSignInSuccess("Please Check Your Email and Verified");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setSignInError(error.message);
      });
  };

  return (
    <div className="w-5/12 border-2 rounded-lg p-5 m-auto">
      <h1 className="text-4xl text-center">Please Sign Up</h1>
      <form onSubmit={handelSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name:</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <span className="label-text my-2">Password</span>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="grow"
              name="password"
              required
            />

            <div>
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <LuEyeOff /> : <FiEye />}
              </span>
            </div>
          </label>
        </div>
        <label className="flex gap-2 items-center">
          <input type="checkbox" name="Terms" id="" />
          <a href="#" className="label-text-alt link link-hover">
            Terms and Condition
          </a>
        </label>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <div>
          <p>
            You have a Account? Please <Link to="/Sign_in">Sign In</Link>
          </p>
        </div>
      </form>
      {signInError && <p className="text-red-500">{signInError}</p>}
      {signInSuccess && <p className="text-green-600">{signInSuccess}</p>}
    </div>
  );
};

export default Sign_In;
