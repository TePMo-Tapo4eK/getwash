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
            <div className="burger-main"><svg className="burger" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg></div>
        </div>
    )
}
export default Header