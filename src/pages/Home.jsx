import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ItemsList from '../components/ItemsList';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://6637bb3c288fedf693812f99.mockapi.io/pizza-react')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка с подгрузкой данных');
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <ItemsList isLoading={isLoading} list={items} />
      </div>
    </>
  );
};

export default Home;
