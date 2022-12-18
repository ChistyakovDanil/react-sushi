import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';
import { RootState } from '../redux/store';

type SortItem = {
  name: string;
  sort: string;
};

const sortName: SortItem[] = [
  { name: 'популярностью', sort: 'rating' },
  { name: 'ціною', sort: 'price' },
  { name: 'вагою', sort: 'mass' },
];

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filter.sort);
  const sortRef = useRef<HTMLDivElement>(null);

  const [hideSort, setHideSort] = useState(false);

  useEffect(() => {
    const handleCliklOutside = (event: MouseEvent) => {
      const _event = event as MouseEvent & { path: Node[] };

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setHideSort(false);
      }
    };

    document.body.addEventListener('click', handleCliklOutside);

    return () => document.body.removeEventListener('click', handleCliklOutside);
  }, []);
  // useEffect(() => {
  //   const handleCliklOutside = (event: React.MouseEvent<HTMLBodyElement>) => {
  //     if (!event.target.path.includes(sortRef.current)) {
  //       setHideSort(false);
  //     }
  //   };

  //   document.body.addEventListener('click', handleCliklOutside);

  //   return () => document.body.removeEventListener('click', handleCliklOutside);
  // }, []);

  function closeSelectedSort(i: SortItem) {
    dispatch(setSort(i));
    setHideSort(false);
  }

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортування за:</b>
        <span
          onClick={() => {
            setHideSort(!hideSort);
          }}
        >
          {sort.name}
        </span>
      </div>
      {hideSort && (
        <div className="sort__popup">
          <ul>
            {sortName.map((obj, index) => {
              return (
                <li
                  key={index}
                  onClick={() => closeSelectedSort(obj)}
                  className={sort.sort === obj.sort ? 'active' : ''}
                >
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
