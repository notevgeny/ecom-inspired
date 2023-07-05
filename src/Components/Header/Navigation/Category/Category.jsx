import { NavLink, useLocation } from "react-router-dom";
import style from './Category.module.scss';
import cn from 'classnames';

export const Category = ({ list }) => {
  const {pathname} = useLocation();
  const gender = pathname.split('/')[1] || 'women';

  let newList = '';

  gender === 'women' ? 
    newList = list.filter(elem => elem.link === 'women') 
    : 
    newList = list.filter(elem => elem.link === 'men');

  return (
    <ul className={style.category}>
      {newList ? newList.map(item => (
        item.categories.map(category => (
          <li key={category.id} className={style.categoryListItem}>
            <NavLink 
              className={cn(style.link, gender === category.link && style.linkActive)} 
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
