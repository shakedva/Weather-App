import {useLocation} from "../contexts/LocationContext";

function DisplaySelectedLocation({selectedLocation}) {
    const weatherApiAddress = 'https://www.7timer.info/bin/api.pl?lon='; //35.213618&lat=31.771959
    const meteoroElement = '&product=civillight&output=json';
    const {state} = useLocation();

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

    let mishtane = '';

    const handleShowForecast = (event) => {
        mishtane = '';
        fetch(`${weatherApiAddress}${locationData.longitude}&lat=${locationData.latitude}${meteoroElement}`)
            .then(status)
            .then(res => res.json())
            .then(json => {
                for (let day of json.dataseries) {
                    mishtane += `${day.date} <br/> ${day.weather} <br/> ${day.temp2m.max} <br/> ${day.temp2m.min}<br/>`
                }
            })
    }

    return (
        <div>
            Name: {locationData.name} <br/>
            Latitude: {locationData.latitude} <br/>
            Longitude: {locationData.longitude} <br/>
            <button onClick={handleShowForecast}>Show Forecast</button>
            <div>{mishtane}</div>
        </div>
    );
}

export default DisplaySelectedLocation;