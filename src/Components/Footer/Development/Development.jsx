import style from './Development.module.scss';

export const Development = () => {
  return (
    <div className={style.development}>
        <ul className={style.developmentList}>
            <li>Designer: 
              <a className={style.link} href="https://t.me/Mrshmallowww">Anastasia Ilina</a>
            </li>
            <li>Developer: Evg Web</li>
        </ul>
    </div>
  )
}
