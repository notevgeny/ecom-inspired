import style from './MainPage.module.scss';
import { Container } from '../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGoods } from '../../features/goodsSlice';
import { Product } from '../Product/Product';

export const MainPage = ( { gender = 'women' } ) => {

  const dispatch = useDispatch();
  const { goodsList } = useSelector(state => state.goods);

  useEffect(() => {
    dispatch(fetchGoods(gender))
  }, [gender, dispatch])

  return (
    <section>
      <Container>
        <h2 className={style.title}>Новинки</h2>
        <ul className={style.list}>
          {goodsList.map(item => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
    
  )
}
