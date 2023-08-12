import imgh from './../../../images/icons8-html-48.png'
import imgc from './../../../images/icons8-css-logo-48.png'
import imgj from './../../../images/icons8-javascript-480.png'
import imgr from './../../../images/icons8-react-js-40.png'
import imgrd from './../../../images/icons8-redux-480.png'
import imgjq from './../../../images/icons8-jquery-250.png'
import imgg from './../../../images/icons8-git-48.png'
import c from '../Header.module.css'
import { useEffect, useRef } from 'react'
import $ from "jquery";
const InfoContainer = () => {
    let images = [imgh, imgc, imgj, imgr, imgrd, imgjq, imgg,]
    const CardRef = useRef(null)

    useEffect(() => {
        const photo = CardRef.current
        const THRESHOLD = 15;

        const handleMouseMove = (e) => {
            const { clientX, clientY, currentTarget } = e;
            const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

            const horizontal = (clientX - offsetLeft) / clientWidth;
            const vertical = (clientY - offsetTop) / clientHeight;
            const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
            const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

            photo.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
        }
        const resetStyles = (e) => {
            photo.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
        }

        $(photo).on("mousemove", handleMouseMove).on("mouseleave", resetStyles);


    }, [])


    let imagesElements = images.map(img => <img src={img} />)




    consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);

    function consoleText(words, id, colors) {
      if (colors === undefined) colors = ['#fff'];
      var visible = true;
      var con = document.getElementById('console');
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target = document.getElementById(id)
      target.setAttribute('style', 'color:' + colors[0])
      window.setInterval(function() {
    
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount)
          window.setTimeout(function() {
            var usedColor = colors.shift();
            colors.push(usedColor);
            var usedWord = words.shift();
            words.push(usedWord);
            x = 1;
            target.setAttribute('style', 'color:' + colors[0])
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function() {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000)
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount)
          letterCount += x;
        }
      }, 120)
      window.setInterval(function() {
        if (visible === true) {
          con.className = 'console-underscore hidden'
          visible = false;
    
        } else {
          con.className = 'console-underscore'
    
          visible = true;
        }
      }, 400)
    }





    return (
        <div className={c.main}>
            <div className={c.infoContainer}>
                <div className={c.info}>
                    <h1>
                        Front-End React Developer
                    </h1>
                    <h2>
                        Hello, I`m Vardges Avetyan, a passionate, hardworking Front End React Developer
                    </h2>
                </div>
                <div className={c.photo}>
                    <img className={c.imgimg} ref={CardRef} src="https://th.bing.com/th/id/R.05df611fe8e6112db8cb264801cbdad7?rik=fzkOYLokpfs9Iw&pid=ImgRaw&r=0" alt="" />
                </div>
            </div>
            <div>
            </div>
            <div>
                <div class={c.consoleContainer}><span id={c.text}></span></div>
                <div class={c.console-container}><span id={c.text}></span><div class={c.console-underscore} id={c.console}>&#95;</div></div>
            </div>
                <div className={c.stack}>
                    {imagesElements}
                </div>

            </div>
            )
}
            export default InfoContainer