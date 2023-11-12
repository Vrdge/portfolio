import { NavLink } from 'react-router-dom'
import c from './../Header.module.css'



const HeaderInner = (props)=>{
    return(
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

                <label className={c.switch}>
                    <input onClick={() => { props.setEditMode((props.EditMode === true ? false : true)) }} type="checkbox" />
                    <span className={`${c.slider} ${c.round}`}></span>
                </label>

            </ul>
        </nav>
    </div>
    )
}
export default HeaderInner