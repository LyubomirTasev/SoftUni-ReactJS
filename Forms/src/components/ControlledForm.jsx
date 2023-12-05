import { useState } from "react";

export default function ControlledForm() {
    const [usernameValue, setUsernameValue] = useState('');

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value); // input's value
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
            id={usernameValue}
            value="Gucci" // подаваме стойност
            onChange={usernameChangeHandler} /> {/* казваме кога да се изпълнят промените*/}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          {/* <input type="submit" value="Register" /> */}
          <button>Register</button>
        </div>
      </form>
    </>
  );
}
