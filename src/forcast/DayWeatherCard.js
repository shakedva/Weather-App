import * as React from "react";

/**
 * This component is responsible of the presentation of the cards that represent the
 * weather each day of the week.
 * @param forecastData the data to become weather cards
 * @returns {JSX.Element}
 */
const DayWeatherCard = ({forecastData}) => {

    /**
     * return a sentence that explains the weather definition
     * @param weather
     * @returns {string|*}
     */
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

    /**
     * convert a date as a string to be of type Date
     * @param date - date to change
     * @returns {string}
     */
    const convertDate = (date) => {
        date = String(date);
        let newDate = new Date(parseInt(date.slice(0, 4)), parseInt(date.slice(4, 6)) - 1, parseInt(date.slice(6)))
        return newDate.toDateString()
    }

    /**
     * create a card for each of the days in the forecastData array.
     */
    const daysRows = forecastData.map((day, index) => {
            return (
                <div className="card col-sm-3" key={index}>
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
        <div className={"row"}>
            <br/>
            {daysRows}
        </div>
    )
};

export default DayWeatherCard;


