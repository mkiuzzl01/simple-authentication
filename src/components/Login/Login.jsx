// import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
// import app from "../../firebase/firebase.init";
// import { useState } from "react";

// const Login = () => {
//   const auth = getAuth(app);
//   const googleAuth = new GoogleAuthProvider();
//   const githubAuth = new GithubAuthProvider();
//   const [user, setUser] = useState(null);

//   const handleLoginGoogle = () => {
//     signInWithPopup(auth, googleAuth)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleLoginGithub = ()=>{
//     signInWithPopup(auth,githubAuth)
//     .then(result=>{
//         const user = result.user;
//         setUser(user);
//         console.log(user)
//     })
//     .catch(error=>{
//         console.log(error);
//     })
//   }
//   const handleLogOut = () => {
//     signOut(auth)
//       .then((result) => {
//         setUser(null);
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div className="text-center">
//       <div>
//         <h1 className="text-3xl">Login From</h1>
//       </div>
//       <div className="m-4">
//         {user ? (
//           <button onClick={handleLogOut} className="btn btn-accent">
//             LogOut
//           </button>
//         ) : (
//           <>
//           <button onClick={handleLoginGoogle} className="btn btn-accent">
//             Login with Google
//           </button>
          
//           <button onClick={handleLoginGithub} className="btn btn-accent">
//             Login with Github
//           </button>
//           </>
//         )}
//       </div>
//       <div>
//         {user && (
//           <div>
//             <h1>Name: {user.displayName}</h1>
//             <p>Email: {user.email}</p>
//             <div className="flex justify-center mt-4">
//               <img src={user.photoURL} alt="" />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;
