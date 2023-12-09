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

import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../Context/AuthContext";
import './LoginForm.css';

import axios from '../services/axios';
import { useNavigate } from 'react-router-dom';
const LOGIN_URL = '/user';

const LoginForm = () => {
    const navigate = useNavigate();

    function handleClick() {
      navigate('/register')
    }

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <button onClick={handleClick}>Sign Up</button>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default LoginForm