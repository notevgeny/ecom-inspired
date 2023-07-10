import { NavLink } from 'react-router-dom';
import style from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

export const Category = () => {
const {genderList, categories} = useSelector(state => state.navigation);

  return (
    <div className={style.category}>
        <h3 className={cn(style.title, style.categoryTitle)}>Каталог</h3>
        <div className={style.categoryList}>
            <ul className={style.categoryList}>
                {genderList?.map(gender => (
                    <li key={gender} className={style.categoryListItem}>
                        <h4 className={style.categorySubtitle}>
                            <NavLink 
                                className={style.link} 
                                to={`/catalog/${gender}`}
                            >
                                { categories[gender].title }
                            </NavLink>
                        </h4>
                        <ul className={style.categorySublist}>
                            {categories[gender]?.list?.map(category => (
                                <li key={category.slug}>
                                    <NavLink 
                                        className={style.link} 
                                        to={`/catalog/${gender}/${category.slug}`}
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
