import { useDispatch, useSelector } from 'react-redux'
import { Goods } from '../../Components/Goods/Goods'
import { useEffect } from 'react';
import { fetchCategory } from '../../features/goodsSlice';
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';
import style from './FavoritePage.module.scss';
import { Container } from '../../Components/Layout/Container/Container';

export const FavoritePage = () => {

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  console.log('favorites: ', favorites);

  const page = usePageFromSearchParams(dispatch);


  useEffect(() => {
    if (favorites) {
      const param = { list: favorites }
      if (page) {
        param.page = page;
      }
      dispatch(fetchCategory(param))
    }
    
  }, [favorites, page, dispatch]);

  return (
    favorites.length ?
      <Goods title='Избранное' />
    :
      <h3 className={style.empty}>Нет избранных товаров</h3>
    
  )
}
