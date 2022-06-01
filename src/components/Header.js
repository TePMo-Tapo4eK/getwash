import React, {useState} from "react";
import "../css/header.css";
import GetWash from "../imgs/GetWash.svg"
import Burger from "./burgermenu";

const Header = () => {

const [state, setState] = useState(false)
const OpenBurger = () => {
    setState(()=> !state)
}

    return(
        <>
        <div className="header">
            <div className="logo"><img src={GetWash} alt="logo"/></div>
            <ul className="menu-list">
                <li><a href="#faststart">Как использовать</a></li>
                <li><a href="#partners">Партнерам</a></li>
                <li><a href="#download">Скачать</a></li>
                <li><a href="#reviews">Отзывы</a></li>
            </ul>
            <a className="btn">Получить доступ</a>
            <div className="burger-main"><svg onClick={OpenBurger} className="burger-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg></div>
            
        </div>
        <Burger state={state} setState={setState}/>
        </>
    )
}
export default Header