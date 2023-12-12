import { useState } from "react";

export default function ControlledForm() {
    const [formValue, setFormValue] = useState({
        username: '',
        password: '',
        age: ''
    });

    const changeHandler = (e) => {
        setFormValue(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const resetFormHandler = (e) => {
      setUsernameValue('');
      setPasswordValue('');
      setAgeValue('');
    }

    const submitHandler = (e) => {
      console.log(formValue);
      resetFormHandler();
    }

  return (
    <>
      <h1>Controlled Form</h1>

      <form ref={formRef}> 
        <div>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            id="username"
            value={formValue.username} // подаваме стойност
            onChange={changeHandler} /> {/* казваме кога да се изпълнят промените*/}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            value={formValue.password}
            onChange={changeHandler} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input 
            type="number" 
            name="age" 
            id="age"
            value={formValue.age}
            onChange={changeHandler} />
        </div>
        <div>
          {/* <input type="submit" value="Register" /> */}
          <button type="button" onClick={submitHandler}>Register</button>
          <button onClick={resetFormHandler}>Reset</button>
        </div>
      </form>
    </>
  );
}
