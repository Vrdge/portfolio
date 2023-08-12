import { NavLink } from 'react-router-dom'
import c from './Header.module.css'
import CanvasContainer from './Canvas/CanvasContainer';
import { useState } from 'react';
import InfoContainer from './ContainerInfo/Info';






const Header = () => {
    const [EditMode, setEditMode] = useState(true)
    return (
        <header >
            <div className={c.header_inner}>
                <div  /*ref={a}*/ id={c.logo}>
                    <h1>AveVar</h1>
                </div>
                <nav>
                    <ul>
                        <NavLink to={'/main'} className={c.navlink}>Main</NavLink>
                    </ul>
                    <ul>
                        <NavLink to={'/about'} className={c.navlink}>About</NavLink>

                    </ul>
                    <ul>
                        <NavLink to={'/Projects'} className={c.navlink}>Projects</NavLink>

                    </ul>
                    <ul>
                        {/* {(EditMode === true
                            ? <button onClick={() => { setEditMode(false) }}>Onn</button>
                            : <button onClick={() => { setEditMode(true) }}>Off</button>
                        )} */}
                        <label className={c.switch}>
                            <input onClick={() => { setEditMode((EditMode === true ? false : true)) }} type="checkbox" />
                            <span className={`${c.slider} ${c.round}`}></span>
                        </label>

                    </ul>
                </nav>
            </div>
            <div className={c.header_content}>
                <CanvasContainer EditMode={EditMode} />
                <InfoContainer/>
            </div>

        </header>

    )
}

export default Header