import style from './Cart.module.scss';
import { Container } from '../Layout/Container/Container';
import { CartItem } from './CartItem/CartItem';

export const Cart = ({ cartItems, goodsList }) => {

    // let totalPrice = 0;
    // for (let i = 0; i < cartItems.length; i++){
    //     totalPrice += goodsList.find(item => item?.id === cartItems[i]?.id)?.price * cartItems[i]?.count;
    // }

    const totalPrice = cartItems.reduce((sum, item) => {
        const product = goodsList.find(product => product.id === item.id);
        if (product) {
            return sum + (product.price * item.count); 
        } else {
            return sum;
        }
    }, 0);

    return (
        <section className={style.cart}>
            <Container>
                <h2 className={style.title}>Корзина</h2>
                {goodsList.length ? 
                    <ul className={style.list}>
                        {cartItems.map((item) => (
                            <li key={`${item.id}-${item.color}-${item.size}`} className={style.item}>
                                <CartItem {...item} goodsList={goodsList} />
                            </li>
                        ))}
                    </ul>
                    :
                    <h3 className={style.empty}>В корзине пусто</h3>
                }
                <div className={style.total}>
                    <p>Итого:</p>
                    <p>{totalPrice} RUB</p>
                </div>
            </Container>

        </section>
    )
}
