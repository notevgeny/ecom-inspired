import style from './Contacts.module.scss'

export const Contacts = () => {
  return (
    <div className={style.contacts}>
        <a className={style.link} href="mailto:Inspired@gmail.com">Inspired@gmail.com</a>
        <a className={style.link} href="tel:+79304902620">8 930 490 26 20</a>
    </div>
  )
}
