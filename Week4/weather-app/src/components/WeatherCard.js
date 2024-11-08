// WeatherCard.js
import React from 'react';

function WeatherCard({ date, iconSrc, tempMax, tempMin }) {
  return (
    <div className="forecast-day">
      <h4>{date}</h4>
      <img src={iconSrc} alt="Weather Icon" />
      <p className="forecast-temp">{tempMax}° to {tempMin}°</p>
    </div>
  );
}

export default WeatherCard;
