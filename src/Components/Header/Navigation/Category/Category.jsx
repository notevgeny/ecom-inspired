import { NavLink, useLocation } from "react-router-dom";
import style from './Category.module.scss';
import cn from 'classnames';

export const Category = ({ list }) => {
  const {pathname} = useLocation();
  const gender = pathname.split('/')[1] || 'women';

  return (
    <ul className={style.category}>
      {list.map(item => (item.link === gender ?
        item.categories.map(category => (
          <li key={category.id} className={style.categoryListItem} data-link={item.link}>
            <NavLink
              className={cn(style.link, gender === category.link && style.linkActive)}
              to={`${item.link}/${category.link}`}
            >
              {category.title}
            </NavLink>
          </li>
        )) : '' 
      ))}
    </ul>
  )
}
