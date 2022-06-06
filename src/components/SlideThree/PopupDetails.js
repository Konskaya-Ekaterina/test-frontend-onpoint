import './PopupDetails.scss';
import {useState} from "react";

function PopupDetails(props) {
  let [currentPoint, setCurrentPoint] = useState(1)
  let [changePageAnimation, setChangePageAnimation] = useState(false)

  const list = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Faucibus pulvinar elementum integer enim',
    'Faucibus pulvinar elementum integer enim',
    'Mi bibendum neque egestas congue quisque egestas diam',
    'Venenatis lectus magna fringilla urna',
    'Venenatis lectus magna fringilla urna'
  ]
  let visibleItemsList = currentPoint === 1 ? list.slice(0, 3) : list.slice(3)
  const listItems = visibleItemsList.map((item, index) => {
        let number = index + 1
        if (currentPoint === 2) {
          number = number + 3
        }
        return <div className="popup-details__item" key={index}>
          <div className="popup-details__number"> 0{number}
          </div>
          <div className="popup-details__text">{item}</div>
        </div>
      }
  );

  function closePopup() {
    props.closePopup()
  }

  function changePage(num) {
    if (currentPoint === num) return

    setChangePageAnimation(true)
    setTimeout(() => {
      setCurrentPoint(num)
    }, 150)
    setTimeout(() => {
      setChangePageAnimation(false)
    }, 500)
  }

  return (
      <div className={props.popupDisplay ? 'popup-details' : 'popup-details_hidden'}>
        <div className="popup-details__box">
          <div className="popup-details__btn-close" onClick={closePopup}></div>
          <div className="popup-details__title">преимущества</div>
          <div className="popup-details__brand">brend<b>xy</b></div>
          <ul className="popup-details__list" style={{animation: changePageAnimation ? 'change-page 0.3s linear' : ''}}>
            {listItems}
          </ul>
          <div className="popup-details__paginator">
            <div className="popup-details__btn-left"
                 onClick={() => changePage(1)}></div>
            <div className={currentPoint === 2 ? 'popup-details__point-empty' : 'popup-details__point'}
                 onClick={() => changePage(1)}></div>
            <div className={currentPoint === 1 ? 'popup-details__point-empty' : 'popup-details__point'}
                 onClick={() => changePage(2)}></div>
            <div className="popup-details__btn-right"
                 onClick={() => changePage(2)}></div>
          </div>
        </div>
      </div>
  );
}

export default PopupDetails;
