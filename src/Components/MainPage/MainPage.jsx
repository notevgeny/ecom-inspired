import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../features/goodsSlice';
import { useParams } from 'react-router-dom';
import { setActiveGender } from '../../features/navigationSlice';
import { Goods } from '../Goods/Goods';
import { Banner } from '../Banner/Banner';

export const MainPage = () => {
  const { gender='women', category } = useParams();
  const dispatch = useDispatch();
 
  const { activeGender, categories } = useSelector(state => state.navigation);
  const genderData = categories[activeGender];
  const categoryData = genderData?.list.find((item) => item.slug === category);
  const bannerData = genderData?.banner;
  console.log('bannerData: ', bannerData);
  console.log('categoryData: ', categoryData);

  useEffect(() => {
    dispatch(setActiveGender(gender))
  }, [gender, dispatch])

  useEffect(() => {
    if (gender && category){
      dispatch(fetchCategory({ gender, category }))
      return;
    }
    if (gender){
      dispatch(fetchGender(gender))
      return;
    }
    
  }, [gender, category, dispatch])

  return (
    <>
      {!category && <Banner bannerData={bannerData} />}
      <Goods categoryData={categoryData} />
    </>
  )
}
