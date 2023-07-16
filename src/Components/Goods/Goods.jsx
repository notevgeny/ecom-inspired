import style from './Goods.module.scss';
import { Container } from '../Layout/Container/Container';
import { Product } from '../Product/Product';
import { Pagination } from '../Pagination/Pagination';
import { useSelector } from 'react-redux';

export const Goods = ({ title, count }) => {

    const {goodsList} = useSelector(state => state.goods);

    return (
        <section className={style.goods}>
            <Container>
                <h2 className={style.title}>
                    {title ?? 'Новинки'} 
                    <span className={style.count}>{count}</span>
                </h2>
                <ul className={style.list}>
                    {goodsList?.map(item => (
                    <li key={item.id}>
                        <Product {...item} />
                    </li>
                    ))}
                </ul>
                <Pagination />
            </Container>
        </section>
    )
}
