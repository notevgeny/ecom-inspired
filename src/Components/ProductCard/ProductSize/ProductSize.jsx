import style from './ProductSize.module.scss';

export const ProductSize = ({size, selectedSize, handleSelectSize }) => {

  return (
    <div className={style.size}>
        <p className={style.title}>Размер</p>
        <ul className={style.list}>
            {size?.map((item, i) => (
                <li key={i}>
                    <label key={item} className={style.item}>
                        <input 
                            className={style.input} 
                            type='radio'
                            name='size'
                            value={item}
                            checked={ selectedSize === item}
                            onChange={handleSelectSize}
                        />
                        <span className={style.check}>{item}</span>
                    </label>
                </li>
                
            ))}
        </ul>
        
    </div>
  )
}
