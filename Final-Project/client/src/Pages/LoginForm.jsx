import {  useState, useRef, useEffect } from "react";
import "./LoginForm.css";

const LoginForm = () => {

  return (
    <section>
      {/* <p ref={errorRef} className={errorMsg ? "errormsg" : "offscreen"}>
        {errorMsg}
      </p> */}
      <h1>Welcome back</h1>

      <form>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          autoComplete="off"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
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
