import styles from './button.module.scss';
import {ReactElement} from "react";

const Button = (props: {
    text: string,
    content?: ReactElement,
    onClick?: () => void,
    type?: 'primary',
}) => {
    return <div>
        <a href='#' className={`${styles.button} ${props.type ? styles[props.type] : ''}`} onClick={props.onClick}>
            <div className={props.content ? styles.horizontalContainer : styles.emptyContainer}>
                <span>{props.text}</span>
                {props.content}
            </div>
        </a>
    </div>
}

export default Button;