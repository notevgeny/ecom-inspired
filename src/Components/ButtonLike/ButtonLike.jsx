import style from './ButtonLike.module.scss';
import { ReactComponent as LikeSVG } from '../../assets/heart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../features/favoritesSlice';
import cn from 'classnames';

export const ButtonLike = ({ id }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state => state.favorites.includes(id));

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorites({id}))
        }
        else {
            dispatch(addToFavorites({id}))
        }
    }

    return (
        <button 
            className={isFavorite ? cn(style.like, style.active) : style.like}
            aria-label="Добавить в избранное"
            type="button"
            onClick={handleToggleFavorite}
        >
            <LikeSVG />
        </button>
    )
}
