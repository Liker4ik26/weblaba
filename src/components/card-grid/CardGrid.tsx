import style from './card_grid.module.scss'
import {ReactElement, ReactNode} from 'react';
import left from '../../assets/images/card_grid/ic_left_drip.png';
import right from '../../assets/images/card_grid/ic_right_drip.png';

const CardGrid = (props: {
    title?: string,
    description?: string,
    children: ReactNode | ReactNode[],
    button?: ReactElement,
    type?: 'left' | 'right',
}) => {

    return <div>
        <section className={style.cardGrid}>
            <img alt='banner-bg'
                 className={`${style.background} ${!props.type || props.type === 'left' ? style.left : style.right}`}
                 src={!props.type || props.type === 'left' ? left : right}/>

            <div className={style.title}>{props.title}</div>

            {props.title && <hr/>}

            <div className={style.description}>{props.description}</div>

            <div className={style.cards}>
                {props.children}
            </div>

            <div className={style.button}>
                {props.button}
            </div>
        </section>
    </div>
}

export default CardGrid;