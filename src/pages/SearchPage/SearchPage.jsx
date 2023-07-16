import { useDispatch, useSelector } from 'react-redux'
import { Goods } from '../../Components/Goods/Goods'
import style from './SearchPage.module.scss';
import { useEffect } from 'react'
import { fetchAll } from '../../features/goodsSlice'
import { useSearchParams } from 'react-router-dom'

export const SearchPage = () => {
  const dispatch = useDispatch();
  const { goodsList } = useSelector(state => state.goods);
  let [ searchParams ] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get('q');
    const params = { search };
    dispatch(fetchAll(params))

  }, [searchParams, dispatch])

  return (
    goodsList.length ?
      <Goods title={`Результаты поиска по запросу: ${searchParams.get('q')}`} />
    : 
    <h3 className={style.empty}>По вашему запросу ничего не найдено</h3>
  )
}
