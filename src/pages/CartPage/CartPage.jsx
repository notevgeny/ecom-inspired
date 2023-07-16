import { useDispatch, useSelector } from 'react-redux';
import { Cart } from '../../Components/Cart/Cart'
import { Order } from '../../Components/Cart/Order/Order'
import { useEffect, useState } from 'react';
import { fetchAll } from '../../features/goodsSlice';
import { OrderModal } from '../../Components/Cart/OrderModal/OrderModal';

export const CartPage = () => {
  const { cartItems, countItems } = useSelector(state => state.cart);
  const { goodsList } = useSelector(state => state.goods);
  const { orderStatus } = useSelector(state => state.cart);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count !== countItems) {
      dispatch(fetchAll({ list: cartItems.map(item => item.id) }));
      setCount(countItems);
    }
  }, [cartItems, count, countItems, dispatch])

  return (
    <>
      <Cart cartItems={cartItems} goodsList={goodsList} />
      { goodsList.length ? <Order cartItems={cartItems} /> : '' }
      { orderStatus === 'successed' && <OrderModal /> }
    </>
  )
}
