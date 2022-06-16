import './SlideThree.scss';
import PopupDetails from "./PopupDetails";
import {useState, useEffect} from "react";
import bubbleOne from '../../assets/images/3-bubble-1.png'
import bubbleTwo from '../../assets/images/3-bubble-2.png'
import bubbleThree from '../../assets/images/3-bubble-3.png'
import bubbleFour from '../../assets/images/3-bubble-4.png'
import bubbleFive from '../../assets/images/3-bubble-5.png'
import bubbleSix from '../../assets/images/3-bubble-6.png'
import bubbleSeven from '../../assets/images/3-bubble-7.png'
import bubbleEight from '../../assets/images/3-bubble-8.png'
import bottle from '../../assets/images/3-bottle.png'

function SlideThree(props) {
  let [popupDisplay, setPopupDisplay] = useState(true)

  function closePopup() {
    setPopupDisplay(false)
  }

  function openPopup() {
    setPopupDisplay(true)
  }

  useEffect(() => {
    if (!props.slideThreePopup) {
      setTimeout(() => {
        closePopup()
      }, 500)
    }
  })

  return (
      <div className="slide-three">
        <div className="container">
          <div className="slide-three__images">
            <img src={bubbleOne} alt="1" className="slide-three__image"/>
            <img src={bubbleTwo} alt="2" className="slide-three__image"/>
            <img src={bubbleThree} alt="3" className="slide-three__image"/>
            <img src={bubbleFour} alt="4" className="slide-three__image"/>
            <img src={bubbleFive} alt="5" className="slide-three__image"/>
            <img src={bubbleSix} alt="6" className="slide-three__image"/>
            <img src={bubbleSeven} alt="7" className="slide-three__image"/>
            <img src={bubbleEight} alt="8" className="slide-three__image"/>
            <img src={bottle} alt="9" className="slide-three__image"/>
          </div>
          <div className="slide-three__title">ключевое сообщение</div>
          <div className="slide-three__brand">brend<b>xy</b></div>
          <div className="slide-three__main">
            <div className="slide-three__block_left">
              <img src={require('../../assets/images/3-icon-plate.png')} alt="icon-plate"
                   className="slide-three__image_left"/>
              <div className="slide-three__text_left">Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
                vestibulum lorem sed risus ultricies
              </div>
            </div>
            <div className="slide-three__block_right">
              <img src={require('../../assets/images/3-icon-calendar.png')} alt="icon-calendar"
                   className="slide-three__image_right"/>
              <div className="slide-three__text_right">A arcu cursus vitae</div>
            </div>
            <button className="slide-three__btn-details btn-details" onClick={openPopup}>
              <img className="btn-details__icon" src={require("../../assets/images/3-icon-plus.png")}
                   alt="Подробнее"/>
              <span className="btn-details__text">Подробнее</span>
            </button>
          </div>
        </div>
        <PopupDetails popupDisplay={popupDisplay} closePopup={closePopup}/>
      </div>
  );
}

export default SlideThree;
