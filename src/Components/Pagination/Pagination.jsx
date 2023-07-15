import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as PrevBtnSVG } from '../../assets/prev.svg';
import { ReactComponent as NextBtnSVG } from '../../assets/next.svg';
import cn from 'classnames';
import style from './Pagination.module.scss';
import { useEffect, useState } from 'react';

export const Pagination = () => {
    const [pagePagination, setPagePagination] = useState('');
    const pathname = useLocation().pathname;
    const { page, pages } = useSelector(state => state.goods);

    useEffect(() => {
        setPagePagination(page)
    }, [page, setPagePagination])

    const handleChangePage = (newPage) => {
        setPagePagination(newPage)
    }

    const handlePrevPage = () => {
        if (pagePagination > 1){
            handleChangePage(pagePagination - 1);
        }
    }

    const handleNextPage = () => {
        if (pagePagination < pages){
            handleChangePage(pagePagination + 1);
        }
    }


    const renderPaginationItems = () => {
        const paginationitems = [];

        // let startPage = Math.max(1, page - 1);
        let startPage = 0;

        if (pagePagination <= pages - 1){
            startPage = Math.max(1, pagePagination - 1);
        } else {
            startPage = Math.max(1, pagePagination - 2);
        }
           
        let endPage = Math.min(startPage + 2, pages);

        for (let i = startPage; i <= endPage; i++){
            paginationitems.push(
                <li key={i} className={style.item}>
                    <NavLink 
                        to={`${pathname}?page=${i}`}
                        className={cn(style.link, i === pagePagination && style.linkActive)}
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
                    disabled={pagePagination <= 1}
                >
                    <PrevBtnSVG />
                </button>

                <ul className={style.list}>
                    {renderPaginationItems()}
                </ul>
                
                <button 
                    className={style.arrow}
                    onClick={handleNextPage}
                    disabled={pagePagination >= pages || pages < 2}
                >
                    <NextBtnSVG />
                </button>
            </div>  } 
        </>
                
    )
}
