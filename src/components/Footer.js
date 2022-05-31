import React from "react";
import "../css/footer.css";
import GetWash from "../imgs/GetWashf.svg"

const Footer = () => {
    return(
        <div className="footer">
            <div className="logo"><img src={GetWash} alt="logo"/></div>
            <ul className="menu-list">
                <li>Как использовать</li>
                <li>Партнерам</li>
                <li>Скачать</li>
                <li>Отзывы</li>
            </ul>
            <a className="btn">Получить доступ</a>
        </div>
    )
}
export default Footer