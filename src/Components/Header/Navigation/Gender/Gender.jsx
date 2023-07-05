import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import style from './Gender.module.scss';


export const Gender = ({ list }) => {

const {pathname} = useLocation();
const gender = pathname.split('/')[1] || 'women';

  return (
    <ul className={style.gender}>
      {list.map(item => (
        <li className={style.item} key={item.id}>
          <NavLink 
            // className={({isActive}) => cn(style.link, isActive && style.linkActive)}
            className={cn(style.link, gender === item.link && style.linkActive)} 
            to={item.link}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
