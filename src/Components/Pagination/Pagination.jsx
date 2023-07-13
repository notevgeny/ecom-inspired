import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../features/goodsSlice';
import { ReactComponent as PrevBtnSVG } from '../../assets/prev.svg';
import { ReactComponent as NextBtnSVG } from '../../assets/next.svg';
import cn from 'classnames';
import style from './Pagination.module.scss';

export const Pagination = () => {
    const pathname = useLocation().pathname;
    const { page, pages } = useSelector(state => state.goods);
    const dispatch = useDispatch();

    const handleChangePage = (newPage) => {
        dispatch(setPage(newPage));
    }

    const handlePrevPage = () => {
        if (page > 1){
            handleChangePage(+page - 1);
        }
    }

    const handleNextPage = () => {
        if (page < pages){
            handleChangePage(+page + 1);
        }
    }


    const renderPaginationItems = () => {
        const paginationitems = [];

        // let startPage = Math.max(1, page - 1);
        let startPage = 0;

        if (page <= pages - 1){
            startPage = Math.max(1, page - 1);
        } else {
            startPage = Math.max(1, page - 2);
        }
           
        let endPage = Math.min(startPage + 2, pages);

        for (let i = startPage; i <= endPage; i++){
            paginationitems.push(
                <li key={i} className={style.item}>
                    <NavLink 
                        to={`${pathname}?page=${i}`}
                        className={cn(style.link, i === +page && style.linkActive)}
                        onClick={() => handleChangePage(i)}
                    >
                        {i}
                    </NavLink>
                </li>
            )
        }
        return paginationitems;
    }

    return (
        <>
            {pages > 1 && 
            <div className={style.pagination}>
                <button 
                    className={style.arrow}
                    onClick={handlePrevPage}
                    disabled={page <= 1}
                >
                    <PrevBtnSVG />
                </button>

                <ul className={style.list}>
                    {renderPaginationItems()}
                </ul>
                
                <button 
                    className={style.arrow}
                    onClick={handleNextPage}
                    disabled={page >= pages || pages < 2}
                >
                    <NextBtnSVG />
                </button>
            </div>  } 
        </>
                
    )
}
