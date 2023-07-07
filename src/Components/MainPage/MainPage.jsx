import { useParams } from 'react-router-dom';
import style from './MainPage.module.scss';
import { Container } from '../Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';

export const MainPage = ( { gender = 'women' } ) => {
  const { category } = useParams();

  const dispatch = useDispatch();
  const {colorsList} = useSelector(state => state.colors);

  return (
    <Container>
        <div>MainPage {gender}</div>
        {category && <p>Категория: {category}</p>}

        <div style={{"marginTop": "20px"}}>
          {colorsList.map(item => (
            <p key={item.id}>{`${item.title} - ${item.code}`}</p>
          ))}
        </div>
        
    </Container>
    
  )
}
