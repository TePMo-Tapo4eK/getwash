import React from "react";
import "../css/maininfo.css"
import Iphones from "../imgs/mainpageiph.png"
import Arrow from "../imgs/arrow.svg"
import iph12 from '../imgs/iph12.png'

const MainInfo= () => {
    return(
        <div className="main-info">
            <div className="main-leftinfo">
                <h1>Поиск ближайшей свободной автомойки и бронирование на удобное время. <img src={Arrow} alt="ff"/></h1>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20V4m-7 9l7 7l7-7"/></svg>
                <p>Мы поможем сохранить ваше время для более интересных занятий, чем стоять в очереди.</p>
                <a className="btn">Получить доступ</a>
            </div>
            <div className="main-photo"><img src={Iphones} alt="ff"/></div>
            <div className="photo-iph">
            <img src={iph12} alt="ip" className="iphoneimg1"/>
            </div>
        </div>
    )
}
export default MainInfo