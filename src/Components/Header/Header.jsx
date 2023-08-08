import { NavLink } from 'react-router-dom'
import c from './Header.module.css'
import CanvasTest from '../Canvas/CanvasTest';
import CanvasContainer from '../Canvas/CanvasContainer';
import Starfield from '../Canvas/CanvasTest';

const Header = () => {


    return (
        <header >
            <div className={c.header_inner}>
                <div  /*ref={a}*/id={c.logo}>
                    <h1>AveVar</h1>
                </div>
                <nav>
                    <ul>
                        <NavLink to={'/projects'}  className={c.navlink}>point</NavLink>
                    </ul>
                    <ul>
                        <NavLink to={'/info'}  className={c.navlink}>point</NavLink>

                    </ul>
                    <ul>
                        <NavLink to={'/auousdhuia'} className={c.navlink}>point</NavLink>

                    </ul>
                    <ul>
                        <NavLink to={'/ajshd'}  className={c.navlink}>point</NavLink>

                    </ul>
                </nav>
            </div>
            <div className={c.header_content}>
                <CanvasTest/>
            </div>
            
        </header>
        
    )
}

export default Header