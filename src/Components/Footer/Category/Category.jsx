import { NavLink } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';

export const Category = ({ list }) => {
  return (
    <div className={style.category}>
        <h3 className={cn(style.title, style.categoryTitle)}>Каталог</h3>
        <div className={style.categoryList}>
            <ul className={style.categoryList}>
                {list.map(item => (
                    <li key={item.id} className={style.categoryListItem}>
                        <h4 className={style.categorySubtitle}>
                            <NavLink className={style.link} to={item.link}>{item.title}</NavLink>
                        </h4>
                        <ul className={style.categorySublist}>
                            {item.categories.map(category => (
                                <li key={category.id}>
                                    <NavLink 
                                        className={style.link} 
                                        to={`${item.link}/${category.link}`}
                                    >
                                        {category.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>   
    </div>
  )
}
