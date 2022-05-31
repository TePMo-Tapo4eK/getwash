import React from "react";
import "../css/reviews.css"
import right from "../imgs/rightarrow.svg"

const Reviews = () => {
    return(
        <div className="reviews">
            <h1>Отзывы о приложении</h1>
            <div className="reviews-text">
                <p>Таким образом консультация с широким активом влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Разнообразный и богатый опыт сложившаяся структура организации обеспечивает широкому кругу (специалистов)участие в формировании модели развития.</p>
                <div className="reviews-btns">
                    <a><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 1L1.5 6L6.5 11" stroke="#72727E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
                    <a className="active"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 11L6.5 6L1.5 1" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
                </div>
            </div>
            <div className="reviews-acc">
                <div className="reviews-acc-img"></div>
                <div className="reviews-acc-text">
                    <h1>John Doe</h1>
                    <p>Водитель</p>
                </div>
            </div>
            <div className="reviews-btns bottom" id="bottom">
                    <a><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 1L1.5 6L6.5 11" stroke="#72727E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
                    <a className="active"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 11L6.5 6L1.5 1" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</a>
                </div>
        </div>
    )
}
export default Reviews