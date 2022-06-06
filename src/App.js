import './App.scss';
import Slides from "./components/Slides";
import {useState} from "react";

function App() {
  let touchStartCoordX
  let touchEndCoordX
  let [slidesMarginStyle, setSlidesMarginStyle] = useState(0)
  let [currentSlide, setCurrentSlide] = useState(1)

  function touchStart(event) {
    touchStartCoordX = event.changedTouches[0].clientX;
  }

  function touchEnd(event) {
    touchEndCoordX = event.changedTouches[0].clientX;
    const touchCoordsGap = touchStartCoordX - touchEndCoordX;
    if (touchCoordsGap > 50 && currentSlide < 3) {
      setSlidesMarginStyle(slidesMarginStyle - 1024)
      setCurrentSlide(currentSlide + 1)
    } else if (touchCoordsGap < -50 && currentSlide > 1) {
      setSlidesMarginStyle(slidesMarginStyle + 1024)
      setCurrentSlide(currentSlide - 1)
    }
  }

  const slideTwoAnimation = currentSlide === 3 || currentSlide === 2
  const slideThreePopup = currentSlide === 3

  function goToFirstSlide() {
    setSlidesMarginStyle(0);
    setCurrentSlide(1)
  }

  function goToNextSlide() {
    setSlidesMarginStyle(0 - 1024);
    setCurrentSlide(2)
  }

  return (
      <div className="App" onTouchStart={touchStart} onTouchEnd={touchEnd}>
        <header className="header">
          <img
              className="header__image"
              src={require('./assets/images/icon-home.png')}
              alt="home"
              onClick={goToFirstSlide}
          />
          <div className="header__title">Project</div>
        </header>
        <main className="main">
          <Slides
              margin={slidesMarginStyle}
              goToNextSlide={goToNextSlide}
              slideTwoAnimation={slideTwoAnimation}
              slideThreePopup={slideThreePopup}
          />
        </main>
        <footer className="footer">
          <img src={require('./assets/images/footer.png')} alt="company-logo" className="footer__image"/>
        </footer>
      </div>
  );
}

export default App;
