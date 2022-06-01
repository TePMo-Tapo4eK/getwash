import React from "react";
import "../css/partnersinfo.css"
import List from "../imgs/list.png"
import Schedule from "../imgs/schedule.png"
import Star from "../imgs/star.png"
import Value from "../imgs/value.png"
import Chat from "../imgs/chat.png"

const PartnersInfo = ({OpenPartners}) => {
    return(
        <div className="partners" id="partners">
            <div className="partners_title">
                <h1>Стань нашим партнером и начни зарабатывать: </h1>
                <p>Автоматизируй свой бизнес вместе с нами. Подключись к нашей системе бронирования, что бы получать новых клиентов и распределить нагрузку равномерно на весь день. Мы предоставляем удобные инструменты для формирования отчетов в несколько кликов и многое другое. </p>
            </div>
            <div className="partners_items">
                <div className="partners_item">
                    <div className="partners_item_icon"><img src={List} alt="list"/></div>
                    <p>Просмотривайте историю заказа</p>
                </div>
                <div className="partners_item">
                    <div className="partners_item_icon"><img src={Schedule} alt="list"/></div>
                    <p>Создание отчета неделя/месяц/год </p>
                </div>
                <div className="partners_item">
                    <div className="partners_item_icon"><img src={Chat} alt="list"/></div>
                    <p>Обратная связь от клиентов</p>
                </div>
                <div className="partners_item">
                    <div className="partners_item_icon"><img src={Star} alt="list"/></div>
                    <p>Контроль качества работы сотрудников</p>
                </div>
                <div className="partners_item">
                    <div className="partners_item_icon"><img src={Value} alt="list"/></div>
                    <p>Бесконтактная оплата работы</p>
                </div>
                
            </div>
            <a className="btn" onClick={OpenPartners}>Стать партнером</a>
        </div>
    )
}
export default PartnersInfo