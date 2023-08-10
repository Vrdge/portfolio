import { useEffect } from "react"
import CanvasStar from "./CanvasStar"













const CanvasContainer = () => {

    const get_screen_size = () => {
        let w = document.documentElement.clientWidth
        let h = document.documentElement.clientHeight
        return Array(w, h)
    }
    return (


        <CanvasStar getScreenSize = {get_screen_size} />
    )
}



export default CanvasContainer