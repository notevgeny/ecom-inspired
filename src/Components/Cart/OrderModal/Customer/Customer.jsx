import style from './Customer.module.scss';


export const Customer = ({ values }) => {
  return (
    <ul className={style.customer}>
      <li className={style.customerItem}>
        <span className={style.customerTitle}>Получатель</span>
        <span className={style.customerData}>{values.fio}</span>
      </li>
      {
      values.delivery === 'delivery' && 
      <li className={style.customerItem}>
        <span className={style.customerTitle}>Адрес доставки</span>
        <span className={style.customerData}>{values.address}</span>
      </li>
      }
      <li className={style.customerItem}>
        <span className={style.customerTitle}>Телефон</span>
        <span className={style.customerData}>{values.phone}</span>
      </li>
      <li className={style.customerItem}>
        <span className={style.customerTitle}>E-mail</span>
        <span className={style.customerData}>{values.email}</span>
      </li>
      <li className={style.customerItem}>
        <span className={style.customerTitle}>Способ получения</span>
        <span className={style.customerData}>
          {values.delivery === 'delivery' ? 'Доставка' : 'Самовывоз'}
        </span>
      </li>
    </ul>
  )
}
