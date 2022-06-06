import './SlideTwo.scss';
import {useState} from "react";

function SlideTwo(props) {
  let [sliderPosition, setSliderPosition] = useState(0)
  const slidePointMin = -10;
  const slidePointMax = 355

  function startSlide(event) {
    const slideCoordY = event.changedTouches[0].clientY - 266
    if (slideCoordY >= slidePointMin && slideCoordY <= slidePointMax) {
      setSliderPosition(slideCoordY)
    }
  }

  return (
      <div className="slide-two">
        <div className="container">
          <div className={props.slideTwoAnimation ? 'slide-two__images_animated' : 'slide-two__images'}>
            <img src={require('../../assets/images/2-image-1.png')} alt="1" className="slide-two__image"/>
            <img src={require('../../assets/images/2-image-2.png')} alt="2" className="slide-two__image"/>
            <img src={require('../../assets/images/2-image-3.png')} alt="3" className="slide-two__image"/>
            <img src={require('../../assets/images/2-image-4.png')} alt="4" className="slide-two__image"/>
            <img src={require('../../assets/images/2-image-5.png')} alt="5" className="slide-two__image"/>
          </div>
          <div className="slide-two__title">текст<br/> сообщения</div>
          <div className="slide-two__main">
            <div className="slide-two__slider slider">
              <div className="slider__track"></div>
              <div className="slider__thumb" style={{top: sliderPosition + 'px'}} onTouchMove={startSlide}></div>
            </div>
            <div className="slide-two__text-block">
              <div className="slide-two__text" style={{marginTop: -sliderPosition + 'px'}}><strong>Lorem ipsum dolor sit amet </strong>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
                tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget
                felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
                dignissim diam quis enim lobortis. Est sit amet facilisis magna. <br/>
                Neque laoreet suspendisse interdum consectetur libero id. <br/>
                Nec ullamcorper sit amet risus nullam eget felis eget. <br/>
                Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. <br/>
                Euismod quis viverra nibh cras pulvinar mattis nunc.<br/>
                Massa massa ultricies mi quis. Sit amet massa vitae tortor
                condimentum lacinia. Et malesuada fames ac turpis egestas
                integer eget. Elementum pulvinar etiam non quam lacus suspendisse
                faucibus interdum posuere.
                <br/>
                <br/>
                Amet justo donec enim diam vulputate ut pharetra sit. <br/>
                Risus ultricies tristique nulla aliquet enim tortor at auctor. <br/>
                Velit sed ullamcorper morbi tincidunt ornare massa. <br/>
                Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim
                diam quis enim. Gravida neque convallis a cras. Ut enim blandit
                volutpat maecenas volutpat. Mauris sit amet massa vitae tortor
                condimentum lacinia quis vel.
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default SlideTwo;
