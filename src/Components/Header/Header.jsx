import { NavLink, useLocation } from 'react-router-dom'
import c from './Header.module.css'
import { useRef } from 'react'
import Canvas from '../Canvas/Canvas';

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
                <Canvas/>
            </div>
            
        </header>
        
    )
}

export default Header