import INavigationItem from '../../models/INavigationItem'
import Burger from '../burger/Burger'
import style from './navigation.module.scss'

const Navigation = (props: {
    logoText: string,
    items: INavigationItem[],
}) => {

    const renderItems = () => {
        return props.items.map((item, index) => <a key={`navigation_${index}`} href='#!'
                                                   className={item.active ? style.active : ''}>{item.text}</a>)
    }

    return <nav className={style.nav}>
        <div className={style.logoContainer}>
            <div className={style.logo}>{'T'}</div>
            {props.logoText}
        </div>

        <div className={style.mobileLinks}>
            <Burger>
                {renderItems()}
            </Burger>
        </div>

        <div className={style.links}>
            {renderItems()}
        </div>
    </nav>
}

export default Navigation;