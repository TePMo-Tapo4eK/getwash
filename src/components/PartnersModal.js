import React, {useState} from "react";
import "../css/partnersmodal.css";
import nickname from "../imgs/nickname.svg"
import phone from "../imgs/call.svg"
import mail from "../imgs/mail.svg"

const PartnersModal = ({partners, setPartners}) => {
    const closePartners = () => {
        setPartners(!partners)
    }
  return (
    <div className={partners ? "partners-modal active" : "partners-modal"}>
      <div className="partners-modal__window">
        <div className="partners-modal__close">
           <svg onClick={closePartners} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504L738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512L828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496L285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512L195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
        </div>
        <div className="partners-modal__title"><h1>Стань нашим партнером и начни зарабатывать</h1></div>
        <div className="partners-modal__form">
          <div className="partners-modal__form__inputs">
            <div className="partners-modal__form__input">
                <div className="partners-modal__form__input__img">
                    <img src={nickname} alt="d"></img>
                </div>
                <input type="text" placeholder="Введите имя"></input>
            </div>
            <div className="partners-modal__form__input">
                <div className="partners-modal__form__input__img">
                    <img src={mail} alt="d"></img>
                </div>
                <input type="email" placeholder="E-mail"></input>
            </div>
            <div className="partners-modal__form__input">
                <div className="partners-modal__form__input__img">
                    <img src={phone} alt="d"></img>
                </div>
                <input type="number" placeholder="Номер телефона"></input>
            </div>
          </div>
          <div className="partners-modal__form__check">
            <div className="partners-modal__form__checkbox">
              <input type="checkbox"></input>
              <p>Я хочу получать новости на почтовый ящик</p>
            </div>
            <div className="partners-modal__form__checkbox">
              <input type="checkbox"></input>
              <p>Я согласен участвовать в сборе данных</p>
            </div>
          </div>
          <a className="btn" onClick={closePartners}>Получить доступ</a>
        </div>
        <div className="partners-modal__accept"></div>
      </div>
    </div>
  );
};
export default PartnersModal;
