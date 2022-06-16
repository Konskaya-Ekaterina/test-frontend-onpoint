import './SlideOne.scss';
import imageOne from '../../assets/images/1-image-1.png'
import imageTwo from '../../assets/images/1-image-2.png'
import imageThree from '../../assets/images/1-image-3.png'
import imageFour from '../../assets/images/1-image-4.png'
import imageFive from '../../assets/images/1-image-5.png'
import imageSix from '../../assets/images/1-image-6.png'
import imageSeven from '../../assets/images/1-image-7.png'
import imageEight from '../../assets/images/1-image-8.png'
import imageNine from '../../assets/images/1-image-9.png'

function SlideOne(props) {

  function goToNextSlide() {
    props.goToNextSlide()
  }

  return (
      <div className="slide-one">
        <div className="container">
          <div className="slide-one__images">
            <img src={imageOne} alt="1" className="slide-one__image"/>
            <img src={imageTwo} alt="2" className="slide-one__image"/>
            <img src={imageThree} alt="3" className="slide-one__image"/>
            <img src={imageFour} alt="4" className="slide-one__image"/>
            <img src={imageFive} alt="5" className="slide-one__image"/>
            <img src={imageSix} alt="6" className="slide-one__image"/>
            <img src={imageSeven} alt="7" className="slide-one__image"/>
            <img src={imageEight} alt="8" className="slide-one__image"/>
            <img src={imageNine} alt="9" className="slide-one__image"/>
          </div>
          <div className="slide-one__hello">Привет,</div>
          <div className="slide-one__main">
            <span className="slide-one__text">это <b>не</b><br/> коммерческое<br/> задание</span>
            <button className="slide-one__btn-next btn-next" onClick={goToNextSlide}>
              <img className="btn-next__icon" src={require("../../assets/images/1-icon-arrow-right.png")}
                   alt="Что дальше"/>
              <span className="btn-next__text">Что дальше?</span>
            </button>
          </div>
        </div>
      </div>
  );
}

export default SlideOne;
