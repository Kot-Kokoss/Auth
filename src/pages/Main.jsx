import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const Auth = observer(() => {
  const { user } = React.useContext(Context);

  const logout = () => {
    user.setIsAuth(false);
  };

  return (
    <>
      <h1 className="content__title">Часть приложения для авторизованных</h1>
      <div className="authGroup">
        <h3 className="notice">Теперь можно работать! </h3>
      </div>
      <Link to="/" className="button--black__1" onClick={() => logout()}>
        Выйти
      </Link>
    </>
  );
});

export default Auth;
