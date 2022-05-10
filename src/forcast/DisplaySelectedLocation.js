import {useLocation} from "../contexts/LocationContext";
import {useState} from "react";
import {ForecastData} from "../structs/ForecastData";
import DayWeatherCard from "./DayWeatherCard";

/**
 * This component is responsible of the fetching of a forecast and showing its data on screen
 * @param props
 * @returns {JSX.Element}
 */
function DisplaySelectedLocation(props) {
    //the forecast related consts
    const weatherApiAddress = 'https://www.7timer.info/bin/api.pl?lon=';
    const meteoroElement = '&product=civillight&output=json';
    const imgApiAddress = 'https://www.7timer.info/bin/astro.php?%20lon=';
    const imgElement = '&ac=0&lang=en&unit=metric&output=internal&tzshift=0';

    const {state} = useLocation();
    const [forecastData, setForecastData] = useState([]); //state to save data of forecast
    const [forecastImg, setForecastImg] = useState(<br/>); //state to save data of forecast image
    let fdList = []; //a list to hold object of type ForecastData

    /**
     * fetch related tests
     * @param response
     * @returns {Promise<never>|Promise<unknown>}
     */
    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    /**
     * function to return the selected location
     */
    const extractLocationData = () => {
        for (let i = 0; i < state.locationList.length; i++) {
            if (state.locationList[i].name === props.selectedLocation) {
                return state.locationList[i];
            }
        }
    }
    const locationData = extractLocationData();

    /**
     * function to fetch data of the selected location's forecast
     */
    const handleShowForecast = () => {
        setForecastImg(<img src={'/images/sun-animation.gif'} alt={'img gif'}/>) //show a gif until done fetching

        fetch(`${weatherApiAddress}${locationData.longitude}&lat=${locationData.latitude}${meteoroElement}`)
            .then(status)
            .then(res => res.json())
            .then(json => {
                for (let day of json.dataseries) {
                    let fd = ForecastData(day.date, day.weather, day.temp2m.min, day.temp2m.max, day.wind10m_max)
                    fdList.push(fd);
                }
                setForecastImg(<img className={"img-fluid"}
                                    src={`${imgApiAddress}${locationData.longitude}&lat=${locationData.latitude}${imgElement}`}
                                    alt={'img forecast'}/>) //change forecast img

                setForecastData(fdList); //save the days of the week' data
            }).catch(function () {
            setForecastImg(<h5><br/> <b>7timer servers are not available right now, please try again later</b></h5>)
        })
    }

    // const changeForecast = () =>
    // {
    //     console.log("hi")
    // let s = '<br/>'
    // if(props.isLocationChanged)
    // {
    //     props.setIsLocationChanged(false)
    //     return( <div>
    //             {forecastImg}<br/>
    //             <DayWeatherCard forecastData={forecastData}/>
    //         </div>)
    //
    // }
    // return <br/>
    // if(props.isLocationChanged)
    //     props.setIsLocationChanged(false)
    // return props.isLocationChanged?  <br/> : ( <div> {forecastImg}<br/>
    //                                          <DayWeatherCard forecastData={forecastData}/>
    //                                            </div>)
    //
    // props.setIsLocationChanged(false)
    // console.log("hi")
    // return <div>props.isLocationChanged: {props.isLocationChanged}</div>
    // console.log("changeForecast: " +props.isLocationChanged)
    // if(props.isLocationChanged)
    // {
    //     props.setIsLocationChanged(false)
    //     // return (
    //     //     <div>
    //     //         {forecastImg}<br/>
    //     //         <DayWeatherCard forecastData={forecastData}/>
    //     //     </div>
    //     // )
    // }
    // return <br/>
    //     // <div>{props.isLocationChanged}</div>
    // }

    return (
        <div>
            <hr/>
            <div>
                <b>Name:</b> {locationData.name} <br/>
                <b>Latitude:</b> {locationData.latitude} <br/>
                <b>Longitude:</b> {locationData.longitude}
            </div>
            <div>

                <br/>
                <button className={"btn btn-outline-info"} onClick={handleShowForecast}>Show Forecast</button>
            </div>
            <hr/>
            <div>
                <br/>
                {forecastImg}<br/>
                <br/>
                <DayWeatherCard forecastData={forecastData}/>
            </div>
        </div>
    );
}

export default DisplaySelectedLocation;