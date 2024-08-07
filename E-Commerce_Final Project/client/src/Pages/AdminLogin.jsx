import "./AdminLogin.css"
import { Link } from "react-router-dom";

export default function AdminLogin() {
  return (
    <>
      <section className="admin-con">
        <form className="center">
          <h1>Please sign In</h1>
          <label htmlFor="username">Username:</label>
          <input 
            type="text"
            id="username"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            required
          />

          <Link to="/item/create">
            <button>Get me in already</button>
          </Link>
        </form>
      </section>
    </>
  );
}
