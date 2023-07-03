import style from './Category.module.scss';
import cn from 'classnames';

export const Category = () => {
  return (
    <div className={style.category}>
        <div className={cn(style.title, style.categoryTitle)}>Каталог</div>
        <div className={style.categoryList}>
            <div className={style.categoryListItem}>
                <div className={style.categorySubtitle}>Женщины</div>
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
                <div className={style.categorySubtitle}>Мужчины</div>
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
