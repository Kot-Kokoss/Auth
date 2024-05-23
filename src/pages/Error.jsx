import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <h2>Страница не найдена</h2>
      <Link to="/" className="content__info">
        Вернуться на главную
      </Link>
    </>
  );
};

export default Error;
