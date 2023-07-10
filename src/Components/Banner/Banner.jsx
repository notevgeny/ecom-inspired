import { NavLink } from 'react-router-dom';
import { Container } from '../Layout/Container/Container';
import style from './Banner.module.scss';
import { useMedia } from 'react-use';
import { API_URL } from '../../const';
import { useEffect, useState } from 'react';


export const Banner = ({ bannerData }) => {
    const isMobile = useMedia('(max-width: 540px)');
    const isTablet = useMedia('(max-width: 768px)');
    const isLaptop = useMedia('(max-width: 1024px)');

    const [bannerImg, setBannerImg] = useState('');
    
    useEffect(() => {
        if (isMobile) {
            setBannerImg(`url(${API_URL}/${bannerData.bg.mobile})`);
          } else if (isTablet) {
            setBannerImg(`url(${API_URL}/${bannerData.bg.tablet})`);
          } else if (isLaptop) {
            setBannerImg(`url(${API_URL}/${bannerData.bg.laptop})`);
          } else {
            setBannerImg(`url(${API_URL}/${bannerData.bg.desktop})`);
          }
    
    }, [isMobile, isTablet, isLaptop, bannerData]);

    return (
        <>
            {bannerData && 
            <section 
                className={style.banner}
                style={{'backgroundImage': bannerImg}}
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
