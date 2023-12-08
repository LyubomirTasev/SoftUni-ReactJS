import { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../Context/AuthProvider";
import axios from "../services/axios";
import baseURL from "../services/axios";
import "./LoginForm.css";

const LOGIN_URL = `${baseURL}/login`;

const LoginForm = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content type": "application/json" },
          withCredentials: true,
        }
      );
      // console.log(JSON.stringify(response.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, password, roles, accessToken });
      setEmail("");
      setPassword("");
      setSuccess(true);

    } catch (error) {
      if(!error?.response) {
        setError('No Server Response');
      } else if(error.response?.status === 400) {
        setError('Missing Email or Password');
      } else if(error.response?.status === 401) {
        setError('Unauthorised');
      } else {
        setError('Login Failed');
      }
    }
  };

  return (
    <>
      {success ? (
        <div>
          <h1>You're in!</h1>
        </div>
      ) : (
        <section>
          {/* <p ref={errorRef} className={errorMsg ? "errormsg" : "offscreen"}>
        {errorMsg}
      </p> */}
          <h1>Welcome back</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              ref={userRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="off"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button>Sign In</button>
          </form>

          <p className="sign-up">
            Need an account? <br />
            <span>
              <a href="#">Register</a>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

// // return (
// // <div className='login-signup'>
// //   <div className="signup-container">
// //     <h1>Sign Up</h1>
// //     <div className="signup-fields">
// //       <input type="text" placeholder='Your Name' />
// //       <input type="email" placeholder='Email Address' />
// //       <input type="password" placeholder='Password' />
// //     </div>
// //     <button>Continue</button>
// //     <p className="signup-login">Already have an account? <span>Login here</span></p>
// //     <div className="signup-agree">
// //       <input type="checkbox" name='' id='' />
// //       <p>By continuing, i agree to the terms of use & privacy policy.</p>
// //     </div>
// //   </div>
// // </div>

// // )

export default LoginForm;
