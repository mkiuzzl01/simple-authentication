import {sendPasswordResetEmail, signInWithEmailAndPassword} from "firebase/auth";
import auth from "../../firebase.config/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Sign_Up = () => {
  const [signSuccess,setSignInSuccess] = useState('');
  const [error,setError] = useState('');
  const emailRef = useRef(null)
  const handleSignIn = e =>{
    
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setSignInSuccess('');
    setError('');

    signInWithEmailAndPassword(auth,email,password)
    .then((result)=>{
      console.log(result)
      if(result.user.emailVerified){
        setSignInSuccess('Sign in Successfully')
      }else{
        setError('Please Verify Your Email')
      }
      }
    )
    .catch(error =>{
      setError(error.message)
      }
    )
  }

  //Forget Password Verify
  const handleResetPass = e =>{
    e.preventDefault();
    const email = emailRef.current.value
    setSignInSuccess('');
    setError('');
    if(!email){
      setError('Give me Email');
      return
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      setError('Please Give a Valid Email');
      return
    }else{
      console.log(email)
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        setSignInSuccess('Password reset email sent!');
      })
      .catch((error)=>{
        setError(error.message)
      })
    }
    
  }
    return (
        <div className="w-5/12 border-2 rounded-lg p-5 m-auto">
            <h1 className="text-4xl text-center">Please Sign In</h1>
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              ref={emailRef}
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <label className="label">
              <a href="#" onClick={handleResetPass} className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign In</button>
          </div>
          <div>
          <p>You have not Account? Please <Link to='/Sign_up'>Sign Up</Link></p>
        </div>
        </form>
          <div>
            {signSuccess && <p className="text-green-600">{signSuccess}</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>
      </div>
    );
};

export default Sign_Up;