// import { useContext } from "react";
// import useForm from "./UseForm";
// import AuthContext from "../Context/authContext";

// const LoginFormKeys = {
//   Email: 'email',
//   Password: 'password',
// }

// export default function Login() { 
//   const {loginSubmitHandler} = useContext(AuthContext);

//   const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
//     [LoginFormKeys.Email]: '',
//     [LoginFormKeys.Password]: ''
//   });

//   return (
//     <div>
//       <h1>Welcome back</h1>

//       <form onSubmit={onSubmit}>
//         <label htmlFor="email">Email Address</label>
//         <input
//           type="email"
//           id="email"
//           name={LoginFormKeys.Email}
//           onChange={onChange}
//           value={values[LoginFormKeys.Email]}
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name={LoginFormKeys.Password}
//           onChange={onChange}
//           value={values[LoginFormKeys.Password]}
//         />
//         <button>Sign In</button>
//       </form>

//       <p className="sign-up">
//         Need an account? <br />
//         <span>
//           <a href="#">
//             Register
//           </a>
//         </span>
//       </p>
//     </div>
//   );
// }
