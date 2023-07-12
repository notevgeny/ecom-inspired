import style from './ProductSize.module.scss';

export const ProductSize = ({size, selectedSize, handleSelectSize }) => {

  return (
    <div className={style.size}>
        <p className={style.title}>Размер</p>
        <div className={style.list}>
            {size?.map((item, i) => (
                <div key={item} className={style.item}>
                    <input 
                        className={style.input} 
                        type='radio'
                        name='size'
                        value={item}
                        checked={!i }
                        onChange={handleSelectSize}
                    />
                    <span className={style.check}>{item}</span>
                </div>
            ))}
        </div>
        
    </div>
  )
}
