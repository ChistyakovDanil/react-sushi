import React, { useEffect } from 'react';
import { useContext } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import SushiBlock from '../components/SushiBlock';
import Skeleton from '../components/SushiBlock/Skeleton';

import { SearchContext } from '../App';

import { useSelector } from 'react-redux';
import { sushiFetch } from '../redux/slices/sushiSlice';
import { RootState, useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector((state: RootState) => state.sushi);
  const { categoryId, sort } = useSelector((state: RootState) => state.filter);

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    const fetchSushi = async () => {
      dispatch(
        sushiFetch({
          categoryId,
          sort,
        })
      );

      window.scrollTo(0, 0);
    };
    fetchSushi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort]);

  const search = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((el, index: number) => <SushiBlock key={index} {...el} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Виникла помилка 😕</h2>
          <p>Не вдалося завантажити дані, спробуйте пізніше</p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? [...new Array(10)].map((_, index) => <Skeleton key={index} />) : search}
        </div>
      )}
    </div>
  );
};

export default Home;
