import { useNavigate } from 'react-router-dom';
import { useRegister } from '../Hooks/useAuth';
import { useForm } from '../Hooks/useForm';
import './Register.css';
import { useState } from 'react';

const initialValues = {email: '', password: '', rePassword: ''};

const Register = () => {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({email, password, rePassword}) => {
        if(password !== rePassword) {
            setError('Password mismatch!');
            return;
        }

        try {
            await register(email, password)
            navigate('/');
          } catch(err) {
            setError(err.message)
            console.log(err.message);
            
          }
    }

    const {values, changeHandler, submitHandler} = useForm( initialValues, registerHandler);

    return (
        <>
                
                <section className='section-part'>
                    <section className='signup-container'>
                    <form className='form-part' onSubmit={submitHandler}> 
                    <h1 className='h1-el'>Register</h1>
                        <label className='label-part' htmlFor="email">
                            Email:
                        </label>
                        <input className='input-part'
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={changeHandler}
                        />


                        <label className='label-part' htmlFor="pass">
                            Password:
                        </label>
                        <input className='input-part'
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                        />


                        <label className='label-part' htmlFor="con-pass">
                            Confirm Password:
                        </label>
                        <input className='input-part'
                            type="password"
                            id="rePassword"
                            name="rePassword"
                            value={values.rePassword}
                            onChange={changeHandler}
                        />

                        { error && (
                            <p><span style={{fontSize: '15px', color: 'red', textDecoration: 'underline'}}>{error}</span></p>
                        )}

                        <button className='button-part'>Sign Up</button>
                    <p className='paragraph'>
                        Already registered?<br />
                        <span className="paragraph-span">
                            {/*put router link here*/}
                        </span>
                    </p>
                        <button className='button-part' style={{marginTop: '2px'}}>Sign In</button>
                    </form>
                    </section>
                    </section>
        </>  
    )
}

export default Register
