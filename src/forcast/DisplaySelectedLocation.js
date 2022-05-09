import {useLocation} from "../contexts/LocationContext";
import {useState} from "react";
import {ForecastData} from "../structs/ForecastData";
import DayWeatherCard from "./DayWeatherCard";

function DisplaySelectedLocation({selectedLocation}) {
    const weatherApiAddress = 'https://www.7timer.info/bin/api.pl?lon='; //35.213618&lat=31.771959
    const meteoroElement = '&product=civillight&output=json';

    const imgApiAddress = 'https://www.7timer.info/bin/astro.php?%20lon='
    const imgElement = '&ac=0&lang=en&unit=metric&output=internal&tzshift=0' //35.213618&lat=31.771959

    const {state} = useLocation();

    const [forecastData, setForecastData] = useState([]);
    const [forecastImg, setForecastImg] = useState(<br/>);

    let fdList = [];

    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    const extractLocationData = () => {
        for (let i = 0; i < state.locationList.length; i++) {
            if (state.locationList[i].name === selectedLocation) {
                return state.locationList[i];
            }
        }
    }

    const locationData = extractLocationData();

    const handleShowForecast = () => {

        setForecastImg(<img src={'/images/sun-animation.gif'} alt={'img gif'}/>)

        fetch(`${weatherApiAddress}${locationData.longitude}&lat=${locationData.latitude}${meteoroElement}`)
            .then(status)
            .then(res => res.json())
            .then(json => {
                for (let day of json.dataseries) {
                    let fd = ForecastData(day.date, day.weather, day.temp2m.min, day.temp2m.max, day.wind10m_max)
                    fdList.push(fd);
                }
                setForecastImg(<img
                    src={`${imgApiAddress}${locationData.longitude}&lat=${locationData.latitude}${imgElement}`}
                    alt={'img forecast'}/>)

                setForecastData(fdList);
            }).catch(function () {
            console.log('oopsi')
        })
    }

    return (
        <div>
            Name: {locationData.name} <br/>
            Latitude: {locationData.latitude} <br/>
            Longitude: {locationData.longitude} <br/>
            <button onClick={handleShowForecast}>Show Forecast</button>
            <br/>
            {forecastImg}<br/>
            <DayWeatherCard forecastData={forecastData}/>
        </div>
    );
}

export default DisplaySelectedLocation;