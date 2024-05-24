import React from 'react';
import { Link } from 'react-router-dom';
import { change } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Reset = observer(() => {
  const { user } = React.useContext(Context);
  const [popup, setPopup] = React.useState(false);
  const [notice, setNotice] = React.useState('');

  const [email, setEmail] = React.useState('');
  const [Login, setLogin] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [PasswordAgain, setPasswordAgain] = React.useState('');

  const changePass = async (login, email, password) => {
    try {
      const data = await change(login, email, password);
      console.log(data);
      user.setUser(data);
      setPopup(true);
    } catch (e) {
      setNotice(e.response.data.message);
    }
  };

  const checkReg = (login, email, pass1, pass2) => {
    let passLen = pass1.length;
    let loginLen = login.length;
    if (loginLen < 4) {
      setNotice('Длина логина от 4 символов');
    } else {
      if (passLen < 8) {
        setNotice('Длина пароля от 8 символов');
      } else {
        if (pass1 !== pass2) {
          setNotice('Пароли не совпадают');
        } else {
          if (!email.includes('@')) {
            setNotice('Некорректный адрес почты');
          } else {
            changePass(login, email, pass1);
          }
        }
      }
    }
  };

  return (
    <>
      {popup ? (
        <>
          <h2>
            Успешно, перейдите на страницу{' '}
            <Link to="/" className="content__info">
              ВХОДА
            </Link>
          </h2>
        </>
      ) : (
        <>
          <h1 className="content__title">Смена пароля</h1>
          <div className="authGroup">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="authItem"
              placeholder="Почта"
              value={email}
            />
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
            <input
              onChange={(e) => setPasswordAgain(e.target.value)}
              className="authItem"
              placeholder="Повторите пароль"
              value={PasswordAgain}
              type="password"
            />
          </div>
          <div className="notice">
            <h3>{notice}</h3>
          </div>
          <div
            className="button--black"
            onClick={() => checkReg(Login, email, Password, PasswordAgain)}>
            Изменить
          </div>
        </>
      )}
    </>
  );
});

export default Reset;
