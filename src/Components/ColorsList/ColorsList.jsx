import { useSelector } from 'react-redux';
import style from './ColorsList.module.scss';
import { Color } from './Color/Color';
import { ColorLabel } from './ColorLabel/ColorLabel';


export const ColorsList = ({ colors, selectedColor, handleSelectColor }) => {
    const { colorsList } = useSelector(state => state.colors);

    return handleSelectColor ? (
        <div className={style.colorsList}>
            {colors?.map((id, i) => {
                const color = colorsList.find(color => color.id === id);

                return <ColorLabel 
                            key={id} 
                            color={color} 
                            check={!i}
                            selectedColor={selectedColor}
                            handleSelectColor={handleSelectColor} 
                        />
            })}
        </div>
    ) : (
        <ul className={style.colorsList}>
            {colors.map((id, i) => {
                const color = colorsList.find(color => color.id === id);
                return <Color key={id} color={color?.code} check={!i} />
            })}
        </ul>
    )
}
