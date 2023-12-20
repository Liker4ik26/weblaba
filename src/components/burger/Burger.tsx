import {slide as Menu} from 'react-burger-menu'
import './burger.scss'
import {ReactElement} from "react";

type Props = {
    children: ReactElement,
}

const Burger = (props: Props) => {
    return <div>
        <Menu right>
            {props.children}
        </Menu>
    </div>
}

export default Burger;