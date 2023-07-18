import style from './Goods.module.scss';
import { Container } from '../Layout/Container/Container';
import { Product } from '../Product/Product';
import { Pagination } from '../Pagination/Pagination';
import { useSelector } from 'react-redux';
import { Preloader } from '../Preloader/Preloader';

export const Goods = ({ title }) => {

    const { goodsList, totalCount, status } = useSelector(state => state.goods);

    return (
        <section className={style.goods}>
            <Container>
                <h2 className={style.title}>
                    {title ?? 'Новинки'} 
                    {totalCount > 0 && <span className={style.count}>&nbsp;({totalCount})</span>}
                </h2>
                {status === 'pending' ? (
                    <Preloader />
                ) : (
                    <>
                        <ul className={style.list}>
                            {goodsList?.map(item => (
                            <li key={item.id}>
                                <Product {...item} />
                            </li>
                            ))}
                        </ul>
                        <Pagination />
                    </>
                )
            }
                
            </Container>
        </section>
    )
}
