import style from './Color.module.scss';
import cn from 'classnames';

export const Color = ({color, check}) => {
  return (
    <li>
      <input 
        type="radio"
        defaultChecked={check}
        className={cn(style.color, check ? style.colorCheck : '')}
        style={{"--data-color": color}}
      >
      </input>
    </li>
    
  )
}
