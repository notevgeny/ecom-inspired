import { NavLink, useLocation } from "react-router-dom";
import style from './Category.module.scss';
import cn from 'classnames';

export const Category = ({ list }) => {
  const location = useLocation();

  let newList = '';

  if (location.pathname.match('women')){
    newList = list.filter(elem => elem.link === 'women');
  }

  if (!location.pathname.match('women')){
    newList = list.filter(elem => elem.link === 'men');
  }

  if (location.pathname === '/'){
    newList = '';
  }

  return (
    <ul className={style.category}>
      {newList ? newList.map(item => (
        item.categories.map(category => (
          <li key={category.id} className={style.categoryListItem}>
            <NavLink 
              className={({isActive}) => cn(style.link, isActive && style.linkActive)} 
              to={`${item.link}/${category.link}`}
            > {category.title}
            </NavLink>
          </li>
              ))
        )) : ''
      }
      
    </ul>
  )
}
