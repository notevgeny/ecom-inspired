import { useSelector } from 'react-redux';
import style from './ColorsList.module.scss';
import { Color } from './Color/Color';


export const ColorsList = ({colors}) => {
    const { colorsList } = useSelector(state => state.colors);

    return (
        <ul className={style.colorsList}>
            {colors.map((id, i) => {
                const color = colorsList.find(color => color.id === id);
                return <Color key={id} color={color?.code} check={!i} />
            })}
        </ul>
    )
}
