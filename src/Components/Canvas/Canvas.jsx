import React from "react"
import { useRef } from "react"
import { useEffect } from "react"






const Canvas = () => {
    /*stuff*/
    const MyStyles = {
        backgroundColor: "rgb(0, 0, 0)",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: " 1600px"
    }
    /*stuff*/
    /*Variables*/

    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;
    var url = document.location.href;
    var flag = true; /*later*/

    var test = true;


    let AnimationId
    let count
    let n = parseInt((url.indexOf('n=') != -1) ? url.substring(url.indexOf('n=') + 2, ((url.substring(url.indexOf('n=') + 2, url.length)).indexOf('&') != -1) ? url.indexOf('n=') + 2 + (url.substring(url.indexOf('n=') + 2, url.length)).indexOf('&') : url.length) : 512);
    let x = 0;
    let y = 0;
    let z = 0;
    let star_color_ratio = 0;
    let star_x_save, star_y_save;
    let star_ratio = 256;
    let star_speed = 4;
    let star_speed_save = 0;
    let star = new Array(n);
    let color;
    let opacity = 0.1;

    let cursor_x = 0;
    let cursor_y = 0;
    let mouse_x = 0;
    let mouse_y = 0;

    let canvas_x = 0;
    let canvas_y = 0;
    let canvas_w = 0;
    let canvas_h = 0;

    let key;

    let timeout;
    let fps = 0;



    /*Variables*/
    function get_screen_size() {
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        return Array(w, h);
    }
    let StarRef = useRef(null)
    let AdSenseRef = useRef(null)


    useEffect(() => {
        const canvas = StarRef.current
        const adsense = AdSenseRef.current
        const context = canvas.getContext('2d');
        count = 0

        function draw(context,) {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height)
            mouse_x = cursor_x - x;
            mouse_y = cursor_y - y;
            context.fillRect(/*0 and 0*/w / 4, h / 4, w / 2, h / 2);
            for (var i = 0; i < n; i++) {
                test = true;
                star_x_save=star[i][3];
                star_y_save=star[i][4];
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
            timeout = setTimeout('draw(star)', fps);

        }

        const init = () => {
            for (var i = 0; i < n; i++) {
                star[i] = new Array(5);
                star[i][0] = Math.random() * w * 2 - x * 2;
                star[i][1] = Math.random() * h * 2 - y * 2;
                star[i][2] = Math.round(Math.random() * z);
                star[i][3] = 0;
                star[i][4] = 0;
            }
            canvas.width = w;
            canvas.height = h;
            context.fillStyle = 'rgb(0,0,0)';
            context.strokeStyle = 'rgb(255,255,255)';
            adsense.style.left = Math.round((w - 728) / 2) + 'px';
            adsense.style.top = (h - 15) + 'px';
            adsense.style.width = 728 + 'px';
            adsense.style.height = 15 + 'px';
            adsense.style.display = 'block';

        }

        function resize() {
            w = parseInt((url.indexOf('w=') != -1) ? url.substring(url.indexOf('w=') + 2, ((url.substring(url.indexOf('w=') + 2, url.length)).indexOf('&') != -1) ? url.indexOf('w=') + 2 + (url.substring(url.indexOf('w=') + 2, url.length)).indexOf('&') : url.length) : get_screen_size()[0]);
            h = parseInt((url.indexOf('h=') != -1) ? url.substring(url.indexOf('h=') + 2, ((url.substring(url.indexOf('h=') + 2, url.length)).indexOf('&') != -1) ? url.indexOf('h=') + 2 + (url.substring(url.indexOf('h=') + 2, url.length)).indexOf('&') : url.length) : get_screen_size()[1]);
            x = Math.round(w / 2);
            y = Math.round(h / 2);
            z = (w + h) / 2;
            star_color_ratio = 1 / z;
            cursor_x = x;
            cursor_y = y;
            let a = 0;
            init(StarRef, AdSenseRef)
        }





        const render = () => {
            debugger
            draw(context,star)
            resize(StarRef, AdSenseRef)
            AnimationId = window.requestAnimationFrame(render)
        }
        render()
        return () => { cancelAnimationFrame(AnimationId) }
    }, [])



    return (
        <div >
            <canvas ref={StarRef}
                styles={MyStyles}
                height="732"></canvas>
            <div ref={AdSenseRef} id="adsense" ></div>




        </div>)
}





export default Canvas


