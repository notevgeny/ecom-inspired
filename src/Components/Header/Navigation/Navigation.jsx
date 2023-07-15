import { Gender } from './Gender/Gender';
import { Category } from './Category/Category';
import { Container } from '../../Layout/Container/Container';
import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  const pathname = useLocation().pathname;

  return (
    pathname !== '/cart' &&
    <nav>
      <Container>
        <Gender />
        <Category />
      </Container>
    </nav>
  )
}
