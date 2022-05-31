import React from "react";
import "../css/startinfo.css";
import mapImg from "../imgs/iphmckp.png"
import DwnldIcon from "../imgs/download.png"
import GpsIcon from "../imgs/gps.png"
import ControlIcon from "../imgs/control.png"
import ValueIcon from "../imgs/value.png"

const StartInfo = () => {
    return(
        <div className="start-info">
            <div className="start-img"><img src={mapImg} alt="map"/></div>
            <div className="start-rightinfo">
                <h1 className="start-title">Быстрый старт:</h1>
                <div className="start-points">
                    <div className="start-point">
                        <div className="start-point_icon"><img src={DwnldIcon} alt="map"/></div>
                        <div className="start-point-text">
                        <h1>Скачай и зарегистируйся</h1>
                        <p>Наше приложение доступно в Apple Store и Google Play</p>
                        </div>
                    </div>
                    <div className="start-point">
                        <div className="start-point_icon"><img src={GpsIcon} alt="map"/></div>
                        <div className="start-point-text">
                        <h1>Выбери ближайшую автомойку</h1>
                        <p>Из свободных поблизости или оставь заказ на удобное время</p>
                        </div>
                    </div>
                    <div className="start-point">
                        <div className="start-point_icon"><img src={ControlIcon} alt="map"/></div>
                        <div className="start-point-text">
                        <h1>Выбери дополнительные услуги</h1>
                        <p>Можешь их добавить к своему основному заказу</p>
                        </div>
                    </div>
                    <div className="start-point">
                        <div className="start-point_icon"><img src={ValueIcon} alt="map"/></div>
                        <div className="start-point-text">
                        <h1>Оплати внутри приложения </h1>
                        <p>Бесконтактная оплата внутри приложения и прозрачные цены</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StartInfo