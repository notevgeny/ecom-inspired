import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../features/goodsSlice';
import { useParams } from 'react-router-dom';
import { setActiveGender } from '../../features/navigationSlice';
import { Goods } from '../../Components/Goods/Goods';
import { Banner } from '../../Components/Banner/Banner';
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';

export const MainPage = () => {
  const { gender, category } = useParams();
  const dispatch = useDispatch();
 
  const { activeGender, categories, genderList } = useSelector(state => state.navigation);
  const genderData = categories[activeGender];
  const categoryData = genderData?.list.find((item) => item.slug === category);
  const bannerData = genderData?.banner;

  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (gender){
      dispatch(setActiveGender(gender))
    } else if (genderList[0]){
      dispatch(setActiveGender(genderList[0]));
      dispatch(fetchGender(genderList[0]));
    }
    
  }, [gender, genderList, dispatch])

  useEffect(() => {
    if (gender && category){
      const param = {gender, category};
      if (page) {
        param.page = page;
      }
      dispatch(fetchCategory(param))
      return;
    }
    if (gender){
      dispatch(fetchGender(gender))
      return;
    }
    
  }, [gender, category, page, dispatch])

  return (
    <>
      {!category && bannerData && <Banner bannerData={bannerData} />}
      <Goods title={categoryData?.title} />
    </>
  )
}
