import { useState } from "react";
import Login from "./components/Login";
import FetchEmail from "./components/FetchEmail";
import Mail from "./assets/Mail";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div className="login-container">
        <h1 className="login-title">Pro’s Elektroniska Posten</h1>
        <Mail width="150" height="150" />
        <div className="login-email">
          <label className="email-label">E-post adress</label>
          <div className="email-input-container">
            <input
              className="email-input"
              type="text"
              placeholder="Skriv ditt E-post adress här"
              onChange={handleEmail}></input>
          </div>
        </div>
        <div className="login-password">
          <label className="password-label">Lösenord</label>
          <div className="password-input-container">
            <input
              className="password-input"
              type="password"
              placeholder="Skriv ditt lössenord här"
              onChange={handlePassword}></input>
          </div>
        </div>
        <button
          onClick={() => {
            Login(email, password, setUser);
          }}
          className="login-btn">
          Logga in
        </button>
      </div>
      <button
        onClick={() => {
          FetchEmail();
        }}>
        get data
      </button>
      <p>{user.email}</p>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <p>{user.incoming}</p>
      <p>{user.sent}</p>
    </>
  );
}

export default App;
