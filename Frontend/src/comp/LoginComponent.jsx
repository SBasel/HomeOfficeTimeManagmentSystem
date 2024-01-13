import  { useState } from 'react';
import axios from 'axios';

const LoginComponent = ({ onLoginSuccess }) => {
  const [input, setInput] = useState({
    personalid: "",
    password: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const onChangeHandler = (event) => {
    setInput({
      ...input,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmitHandlerLogin = async (event) => {
    event.preventDefault();
    const { personalid, password } = input;

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        { personalid, password },
        { withCredentials: true }
      );

      setResponseMessage(response.data.message);
      onLoginSuccess();
    } catch (error) {
      setResponseMessage(
        error.response ? error.response.data.message : "Fehler beim Login"
      );
    }
  };

  return (
    <>
      <h1>Willkommen logge dich ein</h1>
      <h2>Login</h2>
      <form onSubmit={onSubmitHandlerLogin} id="loginForm">
        <input
          onChange={onChangeHandler}
          type="text"
          id="personalid"
          placeholder="Personal ID"
        />
        <input
          onChange={onChangeHandler}
          type="password"
          id="password"
          placeholder="Passwort"
        />
        <button type="submit">Login</button>
      </form>
      <p>{responseMessage}</p>
    </>
  );
};

export default LoginComponent;