import * as React from "react";

/**
 * This component is responsible of the presentation of the cards that represent the
 * weather each day of the week.
 * @param forecastData the data to become weather cards
 * @returns {JSX.Element}
 */
const DayWeatherCard = ({forecastData}) =>
{

    /**
     * return a sentence that explains the weather definition
     * @param weather
     * @returns {string|*}
     */
    const weatherDefinition = (weather) =>
    {
        switch (weather)
        {
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
            case 'mcloudy':
                return 'Total cloud cover between 60%-80%';
            case 'humid':
                return 'Relative humidity over 90% with total cloud cover less than 60%';
            case 'lightrain':
                return 'Precipitation rate less than 4mm/hr with total cloud cover more than 80%';
            case 'oshower':
                return 'Precipitation rate less than 4mm/hr with total cloud cover between 60%-80%';
            case 'ishower':
                return 'Precipitation rate less than 4mm/hr with total cloud cover less than 60%';
            case 'lightsnow':
                return 'Precipitation rate less than 4mm/hr';
            case 'rainsnow':
                return 'Precipitation type to be ice pellets or freezing rain';
            default:
                return weather;
        }
    }
    /**
     * receives a weather and return it's matching image
     * @param weather
     * @returns {JSX.Element}
     */
    const weatherImage = (weather) =>
    {
        switch (weather)
        {
            case 'humid':
                return <img src={`http://www.7timer.info/img/misc/about_civil_fog.png`} alt={`${weather}`}/>;
            case 'ts':
                return <img src={`http://www.7timer.info/img/misc/about_civil_tstorm.png`} alt={`${weather}`}/>;
            default:
                return <img src={`http://www.7timer.info/img/misc/about_civil_${weather}.png`} alt={`${weather}`}/>
        }
    }

    /**
     * receives a wind and return it's matching description
     * @param wind
     * @returns {string}
     */
    const windDefinition = (wind) =>
    {
        switch (wind)
        {
            case 1: return 'No wind';
            case 2: return '0.3-3.4m/s';
            case 3: return '3.4-8.0m/s';
            case 4: return '8.0-10.8m/s';
            case 5: return '10.8-17.2m/s';
            case 6: return '17.2-24.5m/s';
            case 7: return '24.5-32.6m/s';
            case 8: return '32.6-36.7m/s';
            case 9: return '36.7-41.4m/s';
            case 10: return '41.4-46.2m/s';
            case 11: return '46.2-50.9m/s';
            case 12: return '50.9-55.9m/s';
            case 13: return 'Over 55.9m/s';
            default:
                return 'not in range'
        }
    }

    /**
     * convert a date as a string to be of type Date
     * @param date - date to change
     * @returns {string}
     */
    const convertDate = (date) =>
    {
        date = String(date);
        let newDate = new Date(parseInt(date.slice(0, 4)), parseInt(date.slice(4, 6)) - 1, parseInt(date.slice(6)))
        return newDate.toDateString()
    }

    /**
     * create a card for each of the days in the forecastData array.
     */
    const daysRows = forecastData.map((day, index) =>
        {
            return (
                <div className="card col-sm-3" key={index}>
                    <h5 className="card-header">
                        <b>{convertDate(day.date)}</b>
                    </h5>
                    <div className="card-body">
                        <p className="card-text"><b>Weather:</b> {weatherImage(day.weather)}
                            <br/> {weatherDefinition(day.weather)}</p>
                        <p className="card-text"><b>Temperatures:</b> {day.min}℃ - {day.max}℃</p>
                        {/*<p className="card-text">Wind conditions: {day.wind === 1 ? 'No Wind' : `${day.wind}m/s`}</p>*/}
                        <p className="card-text"><b>Wind conditions:</b> {windDefinition(day.wind)}</p>
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


