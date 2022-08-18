import React from "react";
import './card.css'

export const Card = () => (
    <div className="card">
        <div className="main__info">
            <img className="icon" src="https://openweathermap.org/img/wn/10d@2x.png" alt="icon"/>
            <div className="title">New York</div>
            <div className="description">Cloudly</div>
            <div className="temperature">20</div>
        </div>
        <div className="info">
            <div>humidity: 15%</div>
            <div>Feels like: 19</div>
        </div>
    </div>
)