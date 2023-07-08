import { useEffect, useRef } from 'react';
import style from './Color.module.scss';
import cn from 'classnames';

export const Color = ({color, check}) => {
  const el = '--data-color'

  const colorRef = useRef();

  useEffect(() => {
    colorRef.current?.style?.setProperty('--data-color', color);
  }, [color])

  return (
    <li
      className={cn(style.color, check ? style.colorCheck : '')}
      ref={colorRef}
      // style={{"--data-color": color}}
    >
    </li>
    
  )
}
