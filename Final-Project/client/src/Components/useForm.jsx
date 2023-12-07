// // import { useRef, useState, useEffect } from 'react'

// import { useState } from "react";

// // export default function Login() {
// //     const userRef = useRef();
// //     const errorRef = useRef();

// //     const [user, setUser] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [errorMsg, setErrorMsg] = useState('');
// //     const [success, setSuccess] = useState(false);

// //     useEffect(() => {
// //         userRef.current.focus()
// //     }, []);

// //     useEffect(() => {
// //         setErrorMsg('');
// //     }, [user, password]);

// //   return (
// //     <section>
// //         <h1>Sign In</h1>

// //         <form>
// //           <label htmlFor="email">Email Address</label>
// //           <input 
// //             type="email"
// //             id='email'
// //             ref={useRef}
// //             autoComplete='off'
// //             onChange={(e) => setUser(e.target.value)}
// //             value={user} />

// //           <label htmlFor="password">Password</label>
// //         </form>
// //     </section>
// //   )
// // }


// export default function useForm(initialValues) {
//     const [values, setValues] = useState(initialValues);

//     const onChange = (e) => {
//         setValues(state => ({
//             ...state,
//             [e.target.name]: e.target.value
//         }))
//     };

//     return (
//         values,
//         onChange
//     )
// }

