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
                <li onClick={closeWindow}>Как использовать</li>
                <li onClick={closeWindow}>Партнерам</li>
                <li onClick={closeWindow}>Скачать</li>
                <li onClick={closeWindow}>Отзывы</li>
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