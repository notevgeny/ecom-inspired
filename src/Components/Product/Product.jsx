import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';
import style from './Product.module.scss';
import { ColorsList } from '../ColorsList/ColorsList';
import { ButtonLike } from '../ButtonLike/ButtonLike';
import { useEffect, useState } from 'react';
import { ProductPreloader } from '../Preloader/Preloader';

export const Product = ({id, pic, title, price, colors}) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    
    return (
        <article className={style.product}>
            <NavLink className={style.link} to={`/product/${id}`}>
                <img 
                    className={style.image} 
                    src={`${API_URL}/${pic}`} 
                    alt={title}
                    style={{display: loading ? "none" : "block"}}
                    onLoad={()=>{setLoading(false)}}
                />
                { loading ? <ProductPreloader /> : '' }
                <h3 className={style.title}>{title}</h3>
            </NavLink>
            <div className={style.row}>
                <p className={style.price}>{price} RUB</p>
                <ButtonLike id={id} />
            </div>
            <ColorsList colors={colors}/>
        </article>
    )
}
