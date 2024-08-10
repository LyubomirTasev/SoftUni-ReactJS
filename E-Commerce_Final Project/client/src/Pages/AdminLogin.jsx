import "./AdminLogin.css"
import { Link } from "react-router-dom";
import { useForm } from "../Hooks/useForm";
import { useLogin } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const initialValues = {email: '', password: ''};

export default function AdminLogin() {
  const login = useLogin();

  const navigate = useNavigate();

  const loginHandler = async ({email, password}) => {
    try {
      await login(email, password)
      navigate('/item/create');
    } catch(err) {
      console.log(err.message);
      
    }
  }

  const {values, changeHandler, submitHandler} = useForm( initialValues, loginHandler);
  return (
    <>
      <section className="admin-con">
        <form className="center" onSubmit={submitHandler}>
          <h1>Please sign In</h1>
          <input 
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={changeHandler}
          />
            <button className="get-there">Ok, get me in</button>
        </form>
      </section>
    </>
  );
}
