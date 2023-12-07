import {  useState } from "react";
import "./LoginForm.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // const userRef = useRef();
  // const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      })
  }

  const navigate = useNavigate();

  function handleCLick() {
    navigate('/register');
  }
  // const [errorMsg, setErrorMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setErrorMsg("");
  // }, [user, password]);

  // const handleSubmit = async (e) => {
  //     e.preventdefault();
  //     console.log(user, password);
  //     setUser('');
  //     setPassword('');
  //     setSuccess(true);
  // }

  return (
    <section>
      {/* <p ref={errorRef} className={errorMsg ? "errormsg" : "offscreen"}>
        {errorMsg}
      </p> */}
      <h1>Welcome back</h1>

      <form onSubmit={signIn}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
          <a href="#" onClick={handleCLick}>Register</a>
        </span>
      </p>
    </section>
  );
};

// return (
// <div className='login-signup'>
//   <div className="signup-container">
//     <h1>Sign Up</h1>
//     <div className="signup-fields">
//       <input type="text" placeholder='Your Name' />
//       <input type="email" placeholder='Email Address' />
//       <input type="password" placeholder='Password' />
//     </div>
//     <button>Continue</button>
//     <p className="signup-login">Already have an account? <span>Login here</span></p>
//     <div className="signup-agree">
//       <input type="checkbox" name='' id='' />
//       <p>By continuing, i agree to the terms of use & privacy policy.</p>
//     </div>
//   </div>
// </div>

// )

export default LoginForm;
