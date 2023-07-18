import { BallTriangle, RotatingSquare } from 'react-loader-spinner';
import style from './Preloader.module.scss'

export const Preloader = () => {
  return (
    <div className={style.preloader}>
        <BallTriangle 
            height={140}
            width={140}
            color="#8a8a8a"
        />
    </div>
  )
}

export const ProductPreloader = () => {
    return (
        <div className={style.preloader}>
            <RotatingSquare 
                height={140}
                width={140}
                color="#000000"
            />
        </div>
      )
}