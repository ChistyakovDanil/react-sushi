import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';
import { RootState } from '../redux/store';

const Categories = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);

  const categories: string[] = ['Роли', 'Суші', 'Сети', 'Локшина', 'Напої'];

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => {
          return (
            <li
              key={index}
              onClick={() => dispatch(setCategoryId(index))}
              className={categoryId === index ? 'active' : ''}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
