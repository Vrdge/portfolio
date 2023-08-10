import { NavLink } from 'react-router-dom'
import c from './Header.module.css'
import CanvasContainer from '../Canvas/CanvasContainer';

const Header = (props) => {

    return (
        <header >
            <div className={c.header_inner}>
                <div  /*ref={a}*/id={c.logo}>
                    <h1>AveVar</h1>
                </div>
                <nav>
                    <ul>
                        <NavLink to={'/main'}  className={c.navlink}>Main</NavLink>
                    </ul>
                    <ul>
                        <NavLink to={'/about'}  className={c.navlink}>About</NavLink>

                    </ul>
                    <ul>
                        <NavLink to={'/Projects'} className={c.navlink}>Projects</NavLink>

                    </ul>

                </nav>
            </div>
            <div className={c.header_content}>
                <CanvasContainer {...props}/>
            <h1>kjasd</h1>
            </div>
            
        </header>
        
    )
}

export default Header