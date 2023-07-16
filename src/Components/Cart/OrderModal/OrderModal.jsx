import { useDispatch, useSelector } from 'react-redux';
import style from './OrderModal.module.scss';
import { Customer } from './Customer/Customer';
import { API_URL } from '../../../const';
import { clearCart } from '../../../features/cartSlice';

export const OrderModal = () => {

  const dispatch = useDispatch();

  const { 
    order: { values, order, id, totalPrice },
  } = useSelector(state => state.cart);
  const { goodsList } = useSelector(state => state.goods);

  const handleCloseModal = () => {
    // dispatch(clearCart());
  }

  return (
    <div className={style.modal} onClick={handleCloseModal}>
      <div className={style.body}>
        <h2 className={style.title}>Заказ #{id} оформлен</h2>
        <div className={style.description}>
          <p>Спасибо за выбор нашего магазина!</p>
          <p>Здесь вы можете посмотреть все детали вашего заказа.</p>
        </div>
          <Customer values={values} />
          <ul className={style.goods}>
            {order.map(item => {
              const product = goodsList?.find(product => product.id === id);
              console.log('productPic: ', product?.pic);
              return (
              <li 
                className={style.goodsItem} 
                key={`${item.id}-${item.color}-${item.size}`}
              >
              <img 
                className={style.goodsImg} 
                src={`${API_URL}/${product?.pic}`} 
                alt={product?.title} 
              />
              <p className={style.goodsCount}>X{item.count}</p>
            </li>
            )
            })}
          </ul>
          <div className={style.total}>
            <p>Итого: </p>
            <p>{totalPrice} RUB</p>
          </div>
          <button 
            className={style.close}
            onClick={handleCloseModal}
          ></button>
      </div>
    </div>
  )
}
