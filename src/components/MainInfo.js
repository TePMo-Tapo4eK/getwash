import React from "react";
import "../css/maininfo.css"
import Iphones from "../imgs/mainpageiph.png"
import Arrow from "../imgs/arrow.svg"

const MainInfo= () => {
    return(
        <div className="main-info">
            <div className="main-leftinfo">
                <h1>Поиск ближайшей свободной автомойки и бронирование на удобное время. <img src={Arrow} alt="ff"/></h1>
                <p>Мы поможем сохранить ваше время для более интересных занятий, чем стоять в очереди.</p>
                <a className="btn">Получить доступ</a>
            </div>
            <div className="main-photo"><img src={Iphones} alt="ff"/></div>
        </div>
    )
}
export default MainInfo