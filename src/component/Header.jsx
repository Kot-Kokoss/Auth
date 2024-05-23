import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import setIsAuth from '../store/userStore';
const Header = observer(() => {
  const { user } = React.useContext(Context);

  return (
    <>
      <header className="header">
        <div className="header_wrap">
          {user.isAuth ? (
            <Link to="/" className="button--black">
              Выйти
            </Link>
          ) : (
            <button onClick={() => setIsAuth(true)} to="/" className="button--black">
              Авторизация
            </button>
          )}
        </div>
      </header>
    </>
  );
});

export default Header;
