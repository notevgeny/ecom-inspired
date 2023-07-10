import { NavLink } from 'react-router-dom';
import { Container } from '../Layout/Container/Container';
import style from './Banner.module.scss';
import { useMedia } from 'react-use';
import { API_URL } from '../../const';
import { useEffect, useRef } from 'react';


export const Banner = ({ bannerData }) => {
    const isMobile = useMedia('(max-width: 540px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isLaptop = useMedia('(max-width: 1024px)');
    const bgRef = useRef();
    
    useEffect(() => {
        console.log(bannerData);
        if (isMobile) {
            bgRef?.current?.style.setProperty('--backgroundImage', `url(${API_URL}/${bannerData.bg.mobile})`);
          } else if (isTablet) {
            bgRef?.current?.style.setProperty('--backgroundImage', `url(${API_URL}/${bannerData.bg.tablet})`);
          } else if (isLaptop) {
            bgRef?.current?.style.setProperty('--backgroundImage', `url(${API_URL}/${bannerData.bg.laptop})`);
          } else {
            bgRef?.current?.style.setProperty('--backgroundImage', `url(${API_URL}/${bannerData.bg.desktop})`);
          }
    
    }, [isMobile, isTablet, isLaptop, bannerData]);

    return (
        <>
            {bannerData && 
            <section 
                className={style.banner}
                ref={bgRef}
            >
                <Container>
                    <div className={style.content}>
                        <h2 className={style.description}>{bannerData.description}</h2>
                        <NavLink className={style.link} to={`/product/${bannerData.id}`}>
                            Перейти
                        </NavLink>
                    </div>
                </Container>

            </section>
            }
        </>
        
        
    )
}
