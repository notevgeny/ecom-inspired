import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import style from './Gender.module.scss';
import { useSelector } from 'react-redux';


export const Gender = () => {

  const {activeGender, genderList, categories} = useSelector(state => state.navigation);

  return (
    <ul className={style.gender}>
      {genderList.map(gender => (
        <li className={style.item} key={gender}>
          <NavLink 
            className={({isActive}) => cn(style.link, (isActive || gender === activeGender) && style.linkActive)} 
            to={`/catalog/${gender}`}
          >
            {categories[gender].title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
