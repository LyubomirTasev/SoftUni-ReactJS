import { Link } from "react-router-dom";
import styles from "./Login.module.css";

import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useLogin } from "../../hooks/useAuth";

const initialValues = {email: '', password: ''};


export default function Login() {
  const login = useLogin();

  const navigate = useNavigate();

  const loginHandler = async ({ email, password }) => {
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(
    initialValues,
    loginHandler
  );

  return (
    <>
      <section className={styles["section-part"]}>
        <form className={styles["form-part"]} onSubmit={submitHandler}>
          <h1 className={styles["h1-el"]}>Sign In</h1>
          <label className={styles["label-part"]} htmlFor="email">
            Email:
          </label>
          <input
            className={styles["input-part"]}
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            required
          />

          <label className={styles["label-part"]} htmlFor="password">
            Password:
          </label>
          <input
            className={styles["input-part"]}
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={changeHandler}
            required
          />
          <button className={styles["button-part"]}>Sign In</button>
          <p className={styles["paragraph"]}>
            Need an Account?
            <br />
            <span className={styles["paragraph-span"]}>
              {/*put router link here*/}
              <button className={styles["button-part"]}>Sign Up</button>
            </span>
          </p>
        </form>
      </section>
      <Link to="/admin">
        <button className={styles["admin-button"]}>
          Login as Administrator
        </button>
      </Link>
    </>
  );
}
