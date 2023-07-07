import { Gender } from './Gender/Gender';
import { Category } from './Category/Category';
import { Container } from '../../Layout/Container/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setActiveGender } from '../../../features/navigationSlice';

export const Navigation = ({ list }) => {

  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const gender = pathname.split('/')[1] || 'women';
  

  useEffect(()=> {
    dispatch(setActiveGender(gender));
  }, [dispatch, gender])

  return (
    <nav>
      <Container>
        <Gender />
        <Category />
      </Container>
    </nav>
  )
}
