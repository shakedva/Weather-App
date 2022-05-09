import * as React from "react";

const DayWeatherCard = ({forecastData}) => {

    const weatherDefinition = (weather) => {
        switch (weather) {
            case 'clear':
                return 'Total cloud cover less than 20%'
            case 'pcloudy':
                return 'Total cloud cover between 20%-80%'
            case 'cloudy':
                return 'Total cloud cover over over 80%'
            case 'rain':
                return 'Rain with total cloud cover over 80%'
            case 'snow':
                return 'Snow with total cloud cover over 80%'
            case 'ts':
                return 'Lifted Index less than -5'
            case 'tsrain':
                return 'Lifted Index less than -5 with rain'
            default:
                return weather;
        }
    }

    const convertDate = (date) => {
        date = String(date);
        let newDate = new Date(parseInt(date.slice(0, 4)), parseInt(date.slice(4, 6)) - 1, parseInt(date.slice(6)))
        return newDate.toDateString()
    }

    const daysRows = forecastData.map((day, index) => {
            return (
                <div className="card" key={index}>
                    <div className="card-header">
                        {convertDate(day.date)}
                    </div>
                    <div className="card-body">
                        <p className="card-text">Weather: {weatherDefinition(day.weather)}</p>
                        <p className="card-text">Temperatures: {day.min}℃ - {day.max}℃</p>
                        <p className="card-text">Wind conditions: {day.wind === 1 ? 'No Wind' : `${day.wind}m/s`}</p>
                    </div>
                </div>
            )
        }
    )

    return (
        <div>
            {daysRows}
            {/*{forecastData}*/}
        </div>
    )
};

export default DayWeatherCard
;


