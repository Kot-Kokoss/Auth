import React from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [Login, setLogin] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const SignHandler = (value) => {
    alert(value);
  };

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <h1 className="auth__title">Авторизация</h1>
      <div className="auth__inputGroup">
        <input
          onChange={handleLogin}
          className="auth_inputItem"
          placeholder="Логин"
          value={Login}
        />
        <input
          onChange={handlePassword}
          className="auth_inputItem"
          placeholder="Пароль"
          value={Password}
        />
        <Link to="reset">Забыли пароль?</Link>
      </div>
      <div className="button--black" onClick={() => SignHandler(Login)}>
        Войти
      </div>
    </>
  );
};

export default Auth;
