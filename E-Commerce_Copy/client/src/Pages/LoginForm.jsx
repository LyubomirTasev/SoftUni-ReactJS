import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./LoginForm.module.css";

import { useNavigate } from "react-router-dom";
import CreateItem from "./CreateItem";
import { useForm } from "../Hooks/useForm";
import { useLogin } from "../Hooks/useAuth";

const initialValues = {email: '', password: ''};

const LoginForm = () => {

  const login = useLogin();

  const navigate = useNavigate();

  const loginHandler = async ({email, password}) => {
    try {
      await login(email, password)
      navigate('/');
    } catch(err) {
      console.log(err.message);
      
    }
  }

  const {values, changeHandler, submitHandler} = useForm( initialValues, loginHandler);

  return (
    <>
      <section className={styles['section-part']}>
        <form className={styles['form-part']} onSubmit={submitHandler}>
          <h1 className={styles['h1-el']}>Sign In</h1>
          <label className={styles['label-part']} htmlFor="email">Email:</label>
          <input className={styles['input-part']}
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            required
          />

          <label className={styles['label-part']} htmlFor="password">Password:</label>
          <input className={styles['input-part']}
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={changeHandler}
            required
          />
          <button className={styles['button-part']}>Sign In</button>
          <p className={styles['paragraph']}>
            Need an Account?
            <br />
            <span className={styles['paragraph-span']}>
              {/*put router link here*/}
              <button className={styles['button-part']}>Sign Up</button>
            </span>
          </p>
        </form>
      </section>
      <Link to="/admin">
        <button className={styles['admin-button']}>Login as Administrator</button>
      </Link>
    </>
  );
};

export default LoginForm;


// const navigate = useNavigate();

  // function handleClick() {
  //   navigate('/register')
  // }

  // const { setAuth } = useContext(AuthContext);
  // const userRef = useRef();
  // const errRef = useRef();

  // const [user, setUser] = useState('');
  // const [pwd, setPwd] = useState('');
  // const [errMsg, setErrMsg] = useState('');
  // const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //     userRef.current.focus();
  // }, [])

  // useEffect(() => {
  //     setErrMsg('');
  // }, [user, pwd])

  // const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //         const response = await axios.post(LOGIN_URL,
  //             JSON.stringify({ user, pwd }),
  //             {
  //                 headers: { 'Content-Type': 'application/json' },
  //                 withCredentials: true
  //             }
  //         );
  //         console.log(JSON.stringify(response?.data));
  //         //console.log(JSON.stringify(response));
  //         const accessToken = response?.data?.accessToken;
  //         const roles = response?.data?.roles;
  //         setAuth({ user, pwd, roles, accessToken });
  //         setUser('');
  //         setPwd('');
  //         setSuccess(true);
  //     } catch (err) {
  //         if (!err?.response) {
  //             setErrMsg('No Server Response');
  //         } else if (err.response?.status === 400) {
  //             setErrMsg('Missing Username or Password');
  //         } else if (err.response?.status === 401) {
  //             setErrMsg('Unauthorized');
  //         } else {
  //             setErrMsg('Login Failed');
  //         }
  //         errRef.current.focus();
  //     }
  // }

  // // // return (
// // // <div className='login-signup'>
// // //   <div className="signup-container">
// // //     <h1>Sign Up</h1>
// // //     <div className="signup-fields">
// // //       <input type="text" placeholder='Your Name' />
// // //       <input type="email" placeholder='Email Address' />
// // //       <input type="password" placeholder='Password' />
// // //     </div>
// // //     <button>Continue</button>
// // //     <p className="signup-login">Already have an account? <span>Login here</span></p>
// // //     <div className="signup-agree">
// // //       <input type="checkbox" name='' id='' />
// // //       <p>By continuing, i agree to the terms of use & privacy policy.</p>
// // //     </div>
// // //   </div>
// // // </div>

// // // )

// export default LoginForm;

