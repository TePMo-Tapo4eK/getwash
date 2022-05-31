import React from "react";
import "../css/header.css";
import GetWash from "../imgs/GetWash.svg"

const Header = () => {
    return(
        <div className="header">
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
export default Header