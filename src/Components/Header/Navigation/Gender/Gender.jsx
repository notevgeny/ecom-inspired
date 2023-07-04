import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import style from './Gender.module.scss';


export const Gender = ({ list }) => {
  return (
    <ul className={style.gender}>
      {list.map(item => (
        <li className={style.item} key={item.id}>
          <NavLink 
            className={({isActive}) => cn(style.link, isActive && style.linkActive)} 
            to={item.link}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
