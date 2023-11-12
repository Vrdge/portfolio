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

  let letArr = 'Hello Im Vardges Avetyan, a passionate, hardworking Front-End React Developer'.split(' ');
  let letArrElemetns = letArr.map(L => L)
  letArrElemetns.join(' ')
  let numArr = ('' + Array(letArrElemetns.length)).split(',').map(function () { return this[0]++; }, [1]);
  let numArrElements = numArr.map(A => < span  style={{ "--i": A , marginLeft:'10px',}}>{letArrElemetns[A - 1]}</span>)



  let imagesElements = images.map(img => < img key={img} src={img} />)

  return (
    <div className={c.main}>
      <div className={c.infoContainer}>
        <div className={c.info}>
          <h1>
          Front End React Developer
          </h1>
          <h2>
            <div className={c.waviy}>
              {numArrElements}
            </div>
          </h2>
        </div>
        <div className={c.photo}>
          <img className={c.imgimg} ref={CardRef} src="https://th.bing.com/th/id/R.05df611fe8e6112db8cb264801cbdad7?rik=fzkOYLokpfs9Iw&pid=ImgRaw&r=0" alt="" />
        </div>
      </div>
    
      <div className={c.stack}>
        {imagesElements}
      </div>

    </div>
  )
}
export default InfoContainer