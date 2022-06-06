import './SlideOne.scss';

function SlideOne(props) {

  function goToNextSlide() {
    props.goToNextSlide()
  }

  return (
      <div className="slide-one">
        <div className="container">
          <div className="slide-one__images">
            <img src={require('../../assets/images/1-image-1.png')} alt="1" className="slide-one__image"/>
            <img src={require('../../assets/images/1-image-2.png')} alt="2" className="slide-one__image"/>
            <img src={require('../../assets/images/1-image-3.png')} alt="3" className="slide-one__image"/>
            <img src={require('../../assets/images/1-image-4.png')} alt="4" className="slide-one__image"/>
            <img src={require('../../assets/images/1-image-5.png')} alt="5" className="slide-one__image"/>
            <img src={require('../../assets/images/1-image-6.png')} alt="6" className="slide-one__image"/>
            <img src={require('../../assets/images/1-image-7.png')} alt="7" className="slide-one__image"/>
            <img src={require('../../assets/images/1-image-8.png')} alt="8" className="slide-one__image"/>
            <img src={require('../../assets/images/1-image-9.png')} alt="9" className="slide-one__image"/>
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
