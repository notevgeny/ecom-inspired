import { useRouteError } from 'react-router-dom';
import style from './Page404.module.scss';
import { Container } from '../Layout/Container/Container';

export const Page404 = () => {
    const error = useRouteError();
  return (
    <Container>
        <h2>Ошибка 404</h2>
        <p>{error?.message ?? 'Неизвестная ошибка. Попробуйте зайти позже'}</p>
    </Container>
  )
}
