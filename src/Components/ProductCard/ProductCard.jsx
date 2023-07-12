import { useState, useEffect } from 'react';
import { Container } from '../../Components/Layout/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, fetchSimilarProducts } from '../../features/productSlice';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../const';
import { ColorsList } from '../../Components/ColorsList/ColorsList';
import { ReactComponent as Like } from '../../assets/heart.svg';
import { Count } from '../../Components/Count/Count';

import style from './ProductCard.module.scss';
import cn from 'classnames';
import { ProductSize } from './ProductSize/ProductSize';

export const ProductCard = () => {

    const { activeGender } = useSelector(state => state.navigation);

    const dispatch = useDispatch();
    const { id } = useParams();
    const { product, similarProducts } = useSelector(state => state.product);
    const [count, setCount] = useState(1);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    console.log(similarProducts)

    const handleIncrement = () => {
        setCount((prevCount) => ++prevCount);
    }
    
    const handleDecrement = () => {
        if (count > 1) {
            setCount((prevCount) => --prevCount);
        }
    } 

    const handleSelectColor = (e) => {
        setSelectedColor(e.target.value);
    }

    const handleSelectSize = (e) => {
        setSelectedSize(e.target.value);
    }

    useEffect(() => {
        dispatch(fetchProduct(id))
        dispatch(fetchSimilarProducts(activeGender, product.category, product.top))
    }, [id, activeGender, product.category, product.top, dispatch])

    return (
        <section className={style.card}>
            <Container className={style.container}>
                {product.pic && 
                    <img 
                        src={`${API_URL}/${product.pic}`} 
                        className={style.image} 
                        alt={product.title} 
                    />
                }
                <form className={style.content}>
                    {/* <strong>Категория товара: {product.category} - Пол: {activeGender} - Топ: {product.top ? 'Yes' : 'No'}</strong> */}
                    <h2 className={style.title}>{product.title}</h2>
                    <p className={style.price}>{product.price} RUB</p>
                    <div className={style.vendorCode}>
                        <span className={style.subtitle}>Артикул</span>
                        <span className={style.id}>{product.id}</span>
                    </div>

                    <div className={style.color}>
                        <p className={cn(style.subtitle, style.colorTitle)}>Цвет</p>
                        <ColorsList 
                            colors={product.colors} 
                            selectedColor={selectedColor} 
                            handleSelectColor={handleSelectColor} 
                        />
                    </div>
              
                    <ProductSize 
                        size={product.size}
                        selectedSize={selectedSize}
                        handleSelectSize={handleSelectSize} 
                    />

                    <div className={style.description}>
                        <p className={cn(style.subtitle, style.descriptionTitle)}>Описание</p>
                        <p className={style.descriptionText}>{product.description}</p>
                    </div>
                    <div className={style.control}>
                        <Count
                            className={style.count}
                            count={count} 
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                        />
                        <button className={style.addCart} type='submit'>В корзину</button>
                        <button 
                            className={style.favorite} 
                            aria-label='Добавить в избранное' 
                            type='button'
                        >
                            <Like />
                        </button>
                    </div>
                </form>
            </Container>

            <Container>
                <section className={style.similar}>
                    <h2 className={style.title}>Вам также может понравиться</h2>

                </section>
            </Container>
        </section>
    )
}
