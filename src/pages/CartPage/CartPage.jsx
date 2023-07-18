import { useDispatch, useSelector } from 'react-redux';
import { Cart } from '../../Components/Cart/Cart'
import { Order } from '../../Components/Cart/Order/Order'
import { useEffect, useState } from 'react';
import { fetchAll } from '../../features/goodsSlice';
import { OrderModal } from '../../Components/Cart/OrderModal/OrderModal';
import { Preloader } from '../../Components/Preloader/Preloader';

export const CartPage = () => {
  const { cartItems, countItems, orderStatus } = useSelector(state => state.cart);
  const { goodsList, status } = useSelector(state => state.goods);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({ list: cartItems.map(item => item.id) }));
      setCount(countItems);
    }
  }, [cartItems, count, countItems, dispatch])

  return status === 'pending' ? (
    <Preloader />
  ) : (
    <>
      <Cart cartItems={cartItems} goodsList={goodsList} />
      { cartItems.length ? <Order cartItems={cartItems} /> : '' }
      { orderStatus === 'successed' && <OrderModal /> }
    </>
  )
}
