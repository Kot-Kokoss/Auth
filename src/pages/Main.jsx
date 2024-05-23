import React from 'react';
import { Link } from 'react-router-dom';
import { loginFunc } from '../http/userApi';

const Auth = () => {
  const [notice, setNotice] = React.useState('');
  const [Login, setLogin] = React.useState('');
  const [Password, setPassword] = React.useState('');

  const signIn = async (login, password) => {
    const res = await loginFunc(login, password);
    console.log(res);
  };

  const SignHandler = (login, pass) => {
    checkReg(login, pass);
  };

  const checkReg = (login, pass) => {
    let passLen = pass.length;
    let loginLen = login.length;
    if (loginLen < 4) {
      setNotice('Длина логина от 4 символов');
    } else {
      if (passLen < 8) {
        setNotice('Длина пароля от 8 символов');
      } else {
        signIn(login, pass);
        alert('Успешно');
      }
    }
  };

  return (
    <>
      <h1 className="content__title">Авторизация</h1>
      <div className="authGroup">
        <input
          onChange={(e) => setLogin(e.target.value)}
          className="authItem"
          placeholder="Логин"
          value={Login}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="authItem"
          placeholder="Пароль"
          value={Password}
          type="password"
        />
        <h3 className="notice">{notice}</h3>
        <div className="links">
          <Link to="reset" className="content__info">
            Забыли пароль?
          </Link>
          <Link to="registration" className="content__info">
            Зарегистрироваться
          </Link>
        </div>
      </div>
      <div className="button--black" onClick={() => SignHandler(Login, Password)}>
        Войти
      </div>
    </>
  );
};

export default Auth;
