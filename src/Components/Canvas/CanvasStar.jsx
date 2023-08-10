import { useEffect, useRef } from "react"
import $ from "jquery";
import classes from './alisdlias.module.css'

/*Variables*/


const CanvasStar = (props) => {
    const { getScreenSize } = props


    /*Variables*/

    let url = document.location.href;

    let n = parseInt((url.indexOf('n=') != -1) ? url.substring(url.indexOf('n=') + 4, ((url.substring(url.indexOf('n=') + 4, url.length)).indexOf('&') != -1) ? url.indexOf('n=') + 4 + (url.substring(url.indexOf('n=') + 4, url.length)).indexOf('&') : url.length) : 1024);
    var w = 0;
    var h = 0;
    var x = 0;
    var y = 0;
    var z = 0;
    var star_color_ratio = 0;
    var star_x_save, star_y_save;
    var star_ratio = 512;
    var star_speed = 4;
    var star_speed_save = 0;
    var star = new Array(n);
    var color;
    var opacity = 0.45;
    var cursor_x = 0;
    var cursor_y = 0;
    var mouse_x = 0;
    var mouse_y = 0;

    var canvas_x = 0;
    var canvas_y = 0;
    var canvas_w = 0;
    var canvas_h = 0;

    var key;
    var ctrl;

    var timeout;
    var fps = 0;
    let test = true



    const StarFieldRef = useRef(null)



    useEffect(() => {
        const Canvas = StarFieldRef.current
        const context = Canvas.getContext('2d')

        w = parseInt((url.indexOf('w=') != -1) ? url.substring(url.indexOf('w=') + 2, ((url.substring(url.indexOf('w=') + 2, url.length)).indexOf('&') != -1) ? url.indexOf('w=') + 2 + (url.substring(url.indexOf('w=') + 2, url.length)).indexOf('&') : url.length) : getScreenSize()[0]);
        h = parseInt((url.indexOf('h=') != -1) ? url.substring(url.indexOf('h=') + 2, ((url.substring(url.indexOf('h=') + 2, url.length)).indexOf('&') != -1) ? url.indexOf('h=') + 2 + (url.substring(url.indexOf('h=') + 2, url.length)).indexOf('&') : url.length) : getScreenSize()[1]);
        x = Math.round(w / 2);
        y = Math.round(h / 2);
        z = (w + h) / 2;
        star_color_ratio = .75 / z;
        cursor_x = x;
        cursor_y = y;
        var a = 0;
        for (var i = 0; i < n; i++) {
            star[i] = new Array(5);
            star[i][0] = Math.random() * w * 2 - x * 2;
            star[i][1] = Math.random() * h * 2 - y * 2;
            star[i][2] = Math.round(Math.random() * z);
            star[i][3] = 0;
            star[i][4] = 0;
        }



        Canvas.style.position = 'absolute';
        Canvas.width = w;
        Canvas.height = h;
        context.fillStyle='rgba(0,0,0)'
        context.strokeStyle = 'rgb(255,255,255)';


        const draw = (context, w, h) => {

            mouse_x = cursor_x - x;
            mouse_y = cursor_y - y;
            context.fillRect(0, 0, w, h);
            for (var i = 0; i < n; i++) {
                test = true;
                star_x_save = star[i][3];
                star_y_save = star[i][4];
                star[i][0] += mouse_x >> 4; if (star[i][0] > x << 1) { star[i][0] -= w << 1; test = false; } if (star[i][0] < -x << 1) { star[i][0] += w << 1; test = false; }
                star[i][1] += mouse_y >> 4; if (star[i][1] > y << 1) { star[i][1] -= h << 1; test = false; } if (star[i][1] < -y << 1) { star[i][1] += h << 1; test = false; }
                star[i][2] -= star_speed; if (star[i][2] > z) { star[i][2] -= z; test = false; } if (star[i][2] < 0) { star[i][2] += z; test = false; }
                star[i][3] = x + (star[i][0] / star[i][2]) * star_ratio;
                star[i][4] = y + (star[i][1] / star[i][2]) * star_ratio;
                if (star_x_save > 0 && star_x_save < w && star_y_save > 0 && star_y_save < h && test) {
                    context.lineWidth = (1 - star_color_ratio * star[i][2]) * 2;
                    context.beginPath();
                    context.moveTo(star_x_save, star_y_save);
                    context.lineTo(star[i][3], star[i][4]);
                    context.stroke();
                    context.closePath();
                }
            }
        }



        $(document)
        .on('mousedown',()=>{context.fillStyle='rgba(0,0,0,'+opacity+')'}).on('mouseup',()=>{context.fillStyle='rgba(0,0,0)'},)
        .on('dblclick',()=>{context.fillStyle='rgba(0,0,0,'+opacity+')'})
        // $(document).on('mouseup',()=>{context.fillStyle='rgba(0,0,0)'}, { passive: false })


        let AnimationId
        let count = 0;
        const render = () => {
            draw(context, w, h, count)
            AnimationId = window.requestAnimationFrame(render)
        }
        render()
        return () => { window.cancelAnimationFrame(AnimationId) }
    }, [])

    const handleScroll = (event) => {
        if (star_speed <= 16 && star_speed >= -16) {
            let delta = 0
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
            }
            else if (event.detail) {
                delta = -event.detail / 3;
            }
            star_speed += (event.originalEvent.wheelDelta >= 0 ? (star_speed < -15 ? 0 : -0.5) : (star_speed > 15 ? 0 : 0.5))
            // if (event.preventDefault) event.preventDefault();
        } else {
            return
        }
    }
    const handleMouseMove = (event) => {
        const marginWidth = 600
        const marginHeight = 300
        if (event.pageX <= w - marginWidth && event.pageX >= marginWidth) {
            cursor_x = event.pageX
        }
        if (event.pageY <= h - marginHeight && event.pageY >= marginHeight) {
            cursor_y = event.pageY
        }
    }

    $(document).on('mousewheel', (event) => { handleScroll(event) }).on('mousemove', (event) => { handleMouseMove(event) })

    return (
        <div >
            <canvas className={classes.canvas} ref={StarFieldRef} id="Canvas"></canvas>
        </div>
    )
}

export default CanvasStar