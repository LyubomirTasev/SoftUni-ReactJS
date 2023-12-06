import { useState } from "react";

export default function ControlledForm() {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [ageValue, setAgeValue] = useState('');

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value); // input's value
    }
    const resetFormHandler = (e) => {
      setUsernameValue('');
      setPasswordValue('');
      setAgeValue('');
    }

    const passwordChangeHandler = (e) => {
      setPasswordValue(e.target.value);
    }
    const ageChangeHandler = (e) => {
      setAgeValue(e.target.value);
    }
    const submitHandler = (e) => {
      console.log(usernameValue);
      console.log(passwordValue);
      console.log(ageValue);
      resetFormHandler();
    }

  return (
    <>
      <h1>Controlled Form</h1>

      <form > 
        <div>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            id="username"
            value={usernameValue} // подаваме стойност
            onChange={usernameChangeHandler} /> {/* казваме кога да се изпълнят промените*/}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            value={passwordValue}
            onChange={passwordChangeHandler} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input 
            type="number" 
            name="age" 
            id="age"
            value={ageValue}
            onChange={ageChangeHandler} />
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
