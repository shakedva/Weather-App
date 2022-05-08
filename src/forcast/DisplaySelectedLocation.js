import {useLocation} from "../contexts/LocationContext";
import {useState} from "react";
import {ForecastData} from "../structs/ForecastData";

function DisplaySelectedLocation({selectedLocation}) {
    const weatherApiAddress = 'https://www.7timer.info/bin/api.pl?lon='; //35.213618&lat=31.771959
    const meteoroElement = '&product=civillight&output=json';
    const {state} = useLocation();

    const [forecastData, setForecastData] = useState([]);
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

    const addDay = (day) => {
        setForecastData(day)
    }

    const handleShowForecast = (event) => {

        fetch(`${weatherApiAddress}${locationData.longitude}&lat=${locationData.latitude}${meteoroElement}`)
            .then(status)
            .then(res => res.json())
            .then(json => {
                for (let day of json.dataseries) {
                    let fd = ForecastData(day.date, day.weather, day.temp2m.max, day.temp2m.min, day.wind10m_max)
                    fdList.push(fd);

                }
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
            {forecastData ? forecastData[0] : <br/>}
        </div>
    ); //todo create component to display the weather forecast
}

export default DisplaySelectedLocation;