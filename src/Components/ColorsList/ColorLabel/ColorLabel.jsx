import { useEffect, useRef } from 'react';
import style from './ColorLabel.module.scss';
import cn from 'classnames';

export const ColorLabel = ({ color, check, selectedColor, handleSelectColor }) => {

  const colorRef = useRef();

  useEffect(() => {
    colorRef.current?.style?.setProperty('--data-color', color?.code);
  }, [color])

  return (
    <label className={style.color} ref={colorRef}>
      <input 
        className={style.input}
        type='radio'
        name='color'
        value={color?.title}
        checked={selectedColor ? selectedColor === color?.title : check}
        onChange={handleSelectColor}
      />
      <span className={style.colorCheck}></span>
    </label> 
  )
}
