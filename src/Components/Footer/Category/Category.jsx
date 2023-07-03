import style from './Category.module.scss';
import cn from 'classnames';

export const Category = () => {
  return (
    <div className={style.category}>
        <h3 className={cn(style.title, style.categoryTitle)}>Каталог</h3>
        <div className={style.categoryList}>
            <div className={style.categoryListItem}>
            <h4 className={style.categorySubtitle}><a className={style.link} href="#">Женщины</a></h4>
                <ul className={style.categorySublist}>
                    <li><a className={style.link} href="#">Бюстгальтеры</a></li>
                    <li><a className={style.link} href="#">Трусы</a></li>
                    <li><a className={style.link} href="#">Носки</a></li>
                    <li><a className={style.link} href="#">Халаты</a></li>
                    <li><a className={style.link} href="#">Термобелье</a></li>
                    <li><a className={style.link} href="#">Пижамы</a></li>
                </ul>
            </div>
            <div className={style.categoryListItem}>
                <h4 className={style.categorySubtitle}><a className={style.link} href="#">Мужчины</a></h4>
                <ul className={style.categorySublist}>  
                    <li><a className={style.link} href="#">Трусы</a></li>
                    <li><a className={style.link} href="#">Носки</a></li>
                    <li><a className={style.link} href="#">Халаты</a></li>
                    <li><a className={style.link} href="#">Термобелье</a></li>
                </ul>
            </div>
        </div>   
    </div>
  )
}
