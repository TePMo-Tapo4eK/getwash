import React, {useState} from "react";
import "../css/burgermenu.css"

const Burger = ({state, setState}) => {

    const closeWindow = () => {
        setState(!state)
    }
    return(
        <div className= {state ? "burger active" : "burger"} >
            <div className="burger-modal">
            <ul>
                <li><a href="#faststart" onClick={closeWindow}>Как использовать</a></li>
                <li><a href="#partners" onClick={closeWindow}>Партнерам</a></li>
                <li><a href="#download" onClick={closeWindow}>Скачать</a></li>
                <li><a href="#reviews" onClick={closeWindow}>Отзывы</a></li>
            </ul>
            <div className="burger__btns">
                <a className="btn active">Получить доступ</a>
                <a className="btn">Стать партнером</a>
            </div>
            </div>
            <div className="button-close" onClick={closeWindow}>Close</div>
        </div>
    )
}
export default Burger