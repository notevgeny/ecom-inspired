import style from './Goods.module.scss';
import { Container } from '../Layout/Container/Container';
import { Product } from '../Product/Product';
import { Pagination } from '../Pagination/Pagination';
import { useSelector } from 'react-redux';

export const Goods = ({ title }) => {

    const { goodsList, totalCount } = useSelector(state => state.goods);

    return (
        <section className={style.goods}>
            <Container>
                <h2 className={style.title}>
                    {title ?? 'Новинки'} 
                    {totalCount > 0 && <span className={style.count}>&nbsp;({totalCount})</span>}
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
