import SlideOne from "./SlideOne/SlideOne";
import SlideTwo from "./SlideTwo/SlideTwo";
import SlideThree from "./SlideThree/SlideThree";
import './Slides.scss';

function Slides(props) {
  function goToNextSlide() {
    props.goToNextSlide()
  }

  return (
      <div className="slides" style={{marginLeft: props.margin}}>
        <SlideOne goToNextSlide={goToNextSlide}/>
        <SlideTwo slideTwoAnimation={props.slideTwoAnimation}/>
        <SlideThree slideThreePopup={props.slideThreePopup}/>
      </div>
  );
}

export default Slides;
