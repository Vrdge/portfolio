import { Route, Routes } from 'react-router-dom'
import c from './Header.module.css'
import CanvasContainer from './Canvas/CanvasContainer';
import InfoContainer from './ContainerInfo/Info';






const Header = (props) => {

    return (
        <div>

            <div className={c.header_content}>
                <CanvasContainer EditMode={props.EditMode} />
                <Routes>
                    <Route element={<InfoContainer />} path='/main' />
                </Routes>
            </div>
        </div>

    )
}

export default Header