import style from './Goods.module.scss';
import { Container } from '../Layout/Container/Container';
import { Product } from '../Product/Product';
import { useSelector } from 'react-redux';

export const Goods = ({ title }) => {

    const { goodsList } = useSelector(state => state.goods);
    console.log('goodsList: ', goodsList);

    return (
        <section className={style.goods}>
            <Container>
            <h2 className={style.title}>{title ?? 'Новинки'}</h2>
            <ul className={style.list}>
                {goodsList?.map(item => (
                <li key={item.id}>
                    <Product {...item} />
                </li>
                ))}
            </ul>
            </Container>
        </section>
    )
}
