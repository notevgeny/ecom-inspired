import cn from 'classnames';
import { Container } from '../../Layout/Container/Container';
import style from './Top.module.scss';
import logo from '/src/assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LikeSVG } from '../../../assets/heart.svg';
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import { ReactComponent as CartSVG } from '../../../assets/cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '../../../features/searchSlice';

export const Top = () => {
    const { cartItems } = useSelector(state => state.cart);
    // const { countItems } = useSelector(state => state.cart); 
    let sumCount = cartItems.reduce((acc, item) => +item.count + +acc, [0]);

    const dispatch = useDispatch();

    const handleOpenSearch = () => {
        dispatch(toggleSearch());
    }

    return (
        <div className={style.top}>
            <Container className={style.container}>
                <a className={cn(style.link, style.phone)} href="tel:89304902620">8 930 490 26 20</a>
                <NavLink className={style.logo} to="/"><img src={logo} alt="logo" /></NavLink>
                <div className={style.navigation}>
                    <ul className={style.navList}>
                        <li className={style.navItem}>
                            <button className={style.link} onClick={handleOpenSearch}>
                                <SearchSVG />
                            </button>
                        </li>
                        <li className={style.navItem}>
                            <NavLink className={style.link} to="/cart">
                                <CartSVG />
                                {/* {countItems && <span className={style.linkCount}>{countItems}</span>} */}
                                {sumCount > 0 && <span className={style.linkCount}>{sumCount}</span>}
                            </NavLink>
                        </li>
                        <li className={style.navItem}>
                            <NavLink className={cn(style.link, style.like)} to="/favorites">
                                <LikeSVG />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}
