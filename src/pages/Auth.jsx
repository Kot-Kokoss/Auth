import React from 'react';
import { Link } from 'react-router-dom';
import { loginFunc } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
  const { user } = React.useContext(Context);
  const [notice, setNotice] = React.useState('');
  const [Login, setLogin] = React.useState('');
  const [Password, setPassword] = React.useState('');

  const signIn = async (login, password) => {
    try {
      const data = await loginFunc(login, password);
      console.log(data);
      user.setUser(data);
      user.setIsAuth(true);
      setNotice('Вход выполнен');
    } catch (e) {
      setNotice(e.response.data.message);
    }
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
      {notice === 'Вход выполнен' ? (
        <Link to="/main" className="button--black">
          Перейти к работе
        </Link>
      ) : (
        <div className="button--black" onClick={() => SignHandler(Login, Password)}>
          Войти
        </div>
      )}
    </>
  );
});

export default Auth;
